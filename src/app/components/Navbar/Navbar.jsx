"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="mx-auto flex items-center justify-between w-full">
                        <div>
                            <Link href="/" className="flex items-center">
                                <img className="h-20 w-auto" src="/tbcl-logo.png" alt="Transbangla Commodities Ltd." />
                                {/* <Image className="h-20 w-auto" src="/tbcl-logo.png" alt="Transbangla Commodities Ltd." width={32} height={32} /> */}
                                <h2 className='text-xl font-bold'>Transbangla Commodities Ltd.</h2>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">Home</Link>
                                <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">About Us</Link>
                                <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">Services</Link>
                                {/* <div className="relative group">
                                    <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors flex items-center">
                                        Services
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <Link href="/services#trading" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Trading</Link>
                                            <Link href="/services#business-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Business Development</Link>
                                            <Link href="/services#fleet-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Fleet Management</Link>
                                            <Link href="/services#agent-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Agent Management</Link>
                                            <Link href="/services#shipping-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Shipping Services</Link>
                                        </div>
                                    </div>
                                </div> */}
                                <Link href="/fleet" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">Our Fleet</Link>
                                <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">Home</Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">About Us</Link>
                        <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">Services</Link>
                        <Link href="/fleet" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">Our Fleet</Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar