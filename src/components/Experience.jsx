import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen flex flex-col justify-center py-24 bg-white/5 transition-colors duration-300 snap-start px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto w-full"
            >
                <h2 className="text-4xl font-bold mb-16 text-center text-primary">Experience</h2>

                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-12 ml-6 md:ml-10"
                    >
                        <span className="absolute -left-3 md:-left-4 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full ring-8 ring-white dark:ring-gray-900">
                            <FaGraduationCap className="text-black text-sm" />
                        </span>
                        <div className="bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-2xl shadow-xl">
                            <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Frontend Developer Intern</h3>
                                    <p className="text-primary font-semibold">InternnCraft</p>
                                </div>
                                <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium">
                                    2023 - Present
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic mb-4">
                                Worked on real-world frontend projects using React. Built responsive UI components, improved performance, and collaborated in an agile development environment.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                                <li>Collaborated with design teams to translate Figma mockups into interactive code.</li>
                                <li>Identified and refactored bloated components to improve state management and render speed.</li>
                                <li>Participated in daily stand-ups and code reviews to ensure best practices.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
