import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    {/* Company Logo */}
                    <div className="xl:col-span-1">
                        <Image
                            src="/Logo.png"
                            alt="Transbangla Commodities Ltd Logo"
                            width={200}
                            height={67}
                            className="mb-4 bg-white p-2"
                        />
                        <p className="text-sm text-gray-300">
                            Transbangla Commodities Ltd. Your trusted partner in logistics and transportation.
                        </p>
                    </div>

                    {/* Existing content */}
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2 mt-12 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="/about" className="text-base hover:text-gray-300 transition-colors">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-base hover:text-gray-300 transition-colors">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet" className="text-base hover:text-gray-300 transition-colors">Our Fleet</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link href="/contact" className="text-base hover:text-gray-300 transition-colors">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-base hover:text-gray-300 transition-colors">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-base hover:text-gray-300 transition-colors">Terms of Service</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter section */}
                    <div className="mt-12 xl:mt-0">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Subscribe to our newsletter</h3>
                        <p className="mt-4 text-base text-gray-300">The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button type="submit" className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-300">
                            <span className="sr-only">Email</span>
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; {new Date().getFullYear()} Transbangla Commodities Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer