"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your server or a third-party service
        console.log('Form submitted:', formData)
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '' })
        alert('Thank you for your message. We will get back to you soon!')
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Contact Us
                    </motion.h1>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        Get in touch with our team for any inquiries or business opportunities.
                    </p>
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div> */}
            </section>

            {/* Contact Information */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ContactCard
                            icon={<MapPin className="h-8 w-8 text-blue-600" />}
                            title="Our Office"
                            content="123 Business Street, Dhaka 1000, Bangladesh"
                        />
                        <ContactCard
                            icon={<Phone className="h-8 w-8 text-blue-600" />}
                            title="Phone"
                            content="+880 1234 567890"
                        />
                        <ContactCard
                            icon={<Mail className="h-8 w-8 text-blue-600" />}
                            title="Email"
                            content="info@transbangla.com"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Map */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Location</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8979324365014!2d90.39134737410039!3d23.751018888754892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8980228f911%3A0x479041331b0c122f!2sTransbangla%20Commodities%20LTD%20(TBCL)!5e0!3m2!1sen!2sbd!4v1725950809014!5m2!1sen!2sbd" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2575068574366!2d90.40719661496828!3d23.739057984593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1623252345678!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

const ContactCard = ({ icon, title, content }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
    </div>
)