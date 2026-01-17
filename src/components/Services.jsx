import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaWordpress, FaShoppingBag, FaChartBar } from "react-icons/fa";

const services = [
    {
        title: "React & Next.js Websites",
        icon: <FaLaptopCode />,
        description: "Building fast, scalable, and modern SPAs using latest React features.",
    },
    {
        title: "Landing Pages & UI Design",
        icon: <FaRocket />,
        description: "Creating high-converting, responsive, and visually stunning landing pages.",
    },
    {
        title: "WordPress Customization",
        icon: <FaWordpress />,
        description: "Tailoring WordPress themes and plugins to fit unique business needs.",
    },
    {
        title: "WooCommerce & Shopify Stores",
        icon: <FaShoppingBag />,
        description: "Setting up and optimizing e-commerce stores for better sales.",
    },
    {
        title: "Website Performance Optimization",
        icon: <FaChartBar />,
        description: "Improving Lighthouse scores, load times, and overall user experience.",
    },
];

export default function Services() {
    return (
        <section id="services" className="min-h-screen flex flex-col justify-center py-24 bg-gray-50 dark:bg-black/20 transition-colors duration-300 snap-start px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto w-full"
            >
                <h2 className="text-4xl font-bold mb-16 text-center text-primary">Services</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-2xl shadow-xl group text-center"
                        >
                            <div className="text-4xl text-primary mb-4 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
