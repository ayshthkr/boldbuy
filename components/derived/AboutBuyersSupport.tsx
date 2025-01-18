"use client"
import React, { useState } from 'react'
import { DrawCircleText } from '../ui/DrawCircle'

const AboutBuyersSupport = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Add your newsletter signup logic here
        console.log('Subscribing email:', email)
        setEmail('')
    }

    return (
        <>
            <DrawCircleText />
            <div className="bg-gray-50 py-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-gray-600 mb-8">
                        Stay updated with our latest offers, products, and shopping tips.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AboutBuyersSupport