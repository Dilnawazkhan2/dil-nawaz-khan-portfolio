import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center px-6 snap-start">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-12 rounded-2xl shadow-2xl max-w-4xl w-full"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                    Hi, I'm <span className="text-primary">Dil Nawaz Khan</span>
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                    Frontend Developer specializing in React, Next.js, modern UI, and custom WordPress & CMS development (WordPress, Shopify, WooCommerce), delivering high-performance, scalable, user-focused web experiences.
                </p>

                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-primary text-black rounded-xl font-bold hover:scale-105 hover:shadow-lg transition-all"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white/50 dark:bg-white/10 border border-white/20 rounded-xl text-gray-900 dark:text-white font-semibold hover:bg-white/80 dark:hover:bg-white/20 hover:scale-105 transition-all"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
