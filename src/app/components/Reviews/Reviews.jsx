import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'

const testimonials = [
    {
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu",
        name: "Hazard Williamson",
        role: "Delivery Man",
        image: "/michael.jpeg"
    },
    {
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu",
        name: "Ononto Khan",
        role: "Developer",
        image: "/michael.jpeg"
    },
    {
        text: "Pension schemes ensu security during retirement years for eligible individua. Retirement pensions provide financ security for qualifying individu",
        name: "Richard Pitterson",
        role: "CEO Of Western",
        image: "/michael.jpeg"
    }
]

const ClientReviews = () => {
    return (
        <section className="bg-white pt-16 pb-40 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.p
                    className="text-blue-500 font-semibold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    OUR CLIENT AWESOME RIVEWS
                </motion.p>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-0 md:mr-6 max-w-2xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Why Customers Love To Working With Us
                    </motion.h2>
                    <motion.button
                        className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full flex items-center hover:bg-yellow-400 transition-colors duration-300"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        VIEW ALL REVIEWS
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-gray-200 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="absolute -top-4 left-40 text-blue-500 text-6xl mb-4"><Quote /></div>
                            <p className="text-gray-400 mb-6">{testimonial.text}</p>
                            <div className="absolute -bottom-18 left-24">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mx-auto mb-2"
                                />
                                <div>
                                    <h3 className="text-gray-900 text-lg font-bold text-center">{testimonial.name}</h3>
                                    <p className="text-gray-400 text-center">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientReviews