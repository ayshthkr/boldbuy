"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageCarousel } from "./image-carousel";
import { stores } from "../stores-data";

interface ProductFormData {
  product_name: string;
  quantity: number;
  price: number;
  store_id: number;
  images: string[];
}

const formSchema = z.object({
  product_name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  quantity: z.number().min(0, {
    message: "Quantity must be 0 or greater.",
  }),
  price: z.number().min(0, {
    message: "Price must be 0 or greater.",
  }),
  store_id: z.string({
    required_error: "Please select a store.",
  }),
  images: z.array(z.string()),
});

export function ProductForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_name: "",
      quantity: 0,
      price: 0,
      store_id: "",
      images: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const productData: ProductFormData = {
      ...values,
      store_id: parseInt(values.store_id),
    };

    console.log(productData);
    // Here you would typically send the data to your API
    alert("Product created successfully!");
  }

  return (
    <div className="max-w-2xl mx-auto border border-gray-100 shadow-lg p-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="product_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" {...field} />
                </FormControl>
                <FormDescription>
                  The name of your product as it will appear in the catalogue.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter quantity"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormDescription>
                  The number of items available in stock.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter price"
                    step="0.01"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormDescription>
                  The price of the product in your local currency.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="store_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a store" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {stores.map((store) => (
                      <SelectItem key={store.id} value={store.id.toString()}>
                        {store.store_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  The store where this product will be listed.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Images</FormLabel>
                <FormControl>
                  <ImageCarousel
                    images={field.value}
                    onImagesChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>
                  Upload one or more images of your product. The first image
                  will be used as the main image.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create Product</Button>
        </form>
      </Form>
    </div>
  );
}
