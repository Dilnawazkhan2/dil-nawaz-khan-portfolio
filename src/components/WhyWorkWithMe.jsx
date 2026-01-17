import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
    "Clean and modern UI",
    "Responsive & mobile-first design",
    "Performance-focused development",
    "Reliable and client-ready solutions",
];

export default function WhyWorkWithMe() {
    return (
        <section id="why-me" className="py-24 bg-white dark:bg-black/40 transition-colors duration-300 snap-start px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-12 rounded-3xl shadow-2xl"
            >
                <h2 className="text-4xl font-bold mb-10 text-center text-primary">Why Work With Me</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-4 bg-white/40 dark:bg-white/10 rounded-xl"
                        >
                            <FaCheckCircle className="text-primary text-2xl flex-shrink-0" />
                            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{reason}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
