"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    comment: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Smith",
        position: "Lead Developer",
        comment: "Working with this team has been an incredible experience. Their dedication to excellence is unmatched.",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        position: "Project Manager",
        comment: "The attention to detail and professional approach made our collaboration seamless and successful.",
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Mike Richards",
        position: "Technical Lead",
        comment: "I've never worked with a more responsive and skilled team. They exceeded all expectations.",
        image: "https://via.placeholder.com/150"
    }
];

const BuyerTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full bg-gradient-to-r from-blue-900 via-black to-blue-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    What Our Clients Say
                </h2>
                
                <div className="relative">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg p-8 shadow-xl"
                        >
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <p className="text-gray-800 text-lg italic mb-6">
                                    {testimonials[currentIndex].comment}
                                </p>
                                <h3 className="text-xl font-semibold text-blue-900">
                                    {testimonials[currentIndex].name}
                                </h3>
                                <p className="text-gray-600">
                                    {testimonials[currentIndex].position}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                        <FiChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>

                <div className="flex justify-center mt-6 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyerTestimonials;