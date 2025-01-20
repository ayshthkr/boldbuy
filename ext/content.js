let currentTranslation = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "translate") {
    const language = request.language;

    // If translation already exists, apply it directly
    if (currentTranslation && currentTranslation.language === language) {
      applyTranslation(currentTranslation.data);
    } else {
      translatePage(language);
    }
  }
});

function translatePage(language) {
  const apiUrl = `https://translation.googleapis.com/language/translate/v2`;
  const apiKey = ""; // Replace with your GCP API key

  const elements = document.querySelectorAll("p, h1, h2, h3, span, a, div");
  const newElements = Array.from(elements).filter(
    (el) =>
      el.childNodes.length >= 1 &&
      el.childNodes[0].nodeType === 3 &&
      !el.closest('[aria-hidden="true"]') &&
      !el.hasAttribute("aria-hidden") &&
      !["presentation", "none"].includes(el.getAttribute("role")) &&
      !el.classList.contains("sr-only") &&
      !el.classList.contains("notranslate") &&
      !el.classList.contains("no-translate") &&
      el.innerText.trim() !== "" &&
      el.innerText.indexOf("self.") === -1
  );

  const filteredTexts = newElements.map((element) =>
    element.innerText.replaceAll(", ", "")
  );

  if (filteredTexts.length === 0) {
    console.warn("No text found to translate.");
    return;
  }

  console.log(JSON.stringify(filteredTexts));

  const GEMINI_API_KEY = "";

  fetch(
    `${apiUrl}?key=${apiKey}&target=${language}&q=${JSON.stringify(
      filteredTexts
    )}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then(async (data) => {
      // Extract translations and apply them to elements
      console.log(data.data.translations[0].translatedText);
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            system_instruction: {
              parts: {
                text: 'Your job is to sanitize an array string so that it can be run through JSON.parse without parsing issues. For ex: 3[&quot;बोल्डबाय&quot;,&quot;होम&quot;,&quot;खरीदारों के लिए&quot;] means that the array has 3 valid words so the output  must be parsed to ["बोल्डबाय","होम","खरीदारों के लिए"] without returning the length and the output returned as a valid json object without backticks or anything that can be parsed through JSON.parse. After converting it to a valid JSON object, run it through another pass, for ex: ["विक्रेता ","पंजीकरण","विक्रेता ","बोल्डबाय" पर,"पंजीकरण","केवाईसी" को पूरा करें,"और ","अपनी "] is not a valid JSON string because the 4th string is not correctly inside double quotes. The correct string must ["विक्रेता ","पंजीकरण","विक्रेता ","बोल्डबाय पर","पंजीकरण","केवाईसी को पूरा करें","और ","अपनी "] ',
              },
            },
            contents: {
              parts: {
                text: filteredTexts.length.toString() + data.data.translations[0].translatedText,
              },
            },
          }),
        }
      );
      const respJson = await response.json()
      const tx = respJson.candidates[0].content.parts[0].text.replaceAll('```json', '').replaceAll('```', '');
      // tx = data.data.translations[0].translatedText.replaceAll("&quot;", '"');
      console.log(tx);
      const translations = JSON.parse(tx);

      // Apply translations to elements
      newElements.forEach((el, index) => {
        console.log("OLD", el.textContent);
        console.log("NEW", translations[index] || el.textContent);
        el.textContent = translations[index] || el.textContent;
      });

      // Save translation in localStorage for subsequent pages
      const currentTranslation = { language, translations };
      localStorage.setItem("translation", JSON.stringify(currentTranslation));
    })
    .catch((error) => console.error("Translation error:", error));
}

function applyTranslation(translation) {
  const elements = Array.from(document.body.querySelectorAll("*")).filter(
    (el) => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
  );
  const translations = translation.data.map(
    (item) => item.translations[0].text
  );

  elements.forEach((el, index) => {
    el.textContent = translations[index];
  });
}

// Apply saved translation on page load
// const savedTranslation = localStorage.getItem("translation");
// if (savedTranslation) {
//   applyTranslation(JSON.parse(savedTranslation));
// }
