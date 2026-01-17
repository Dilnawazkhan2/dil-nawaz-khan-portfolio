import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden"; // Prevent background scrolling
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                role="dialog"
                aria-modal="true"
            >
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 20, opacity: 0, scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 p-6 md:p-10"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                        aria-label="Close Modal"
                    >
                        <FaTimes size={24} className="text-gray-600 dark:text-gray-400" />
                    </button>

                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                        {project.title}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                    Overview
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.overview}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                    My Role
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {project.role}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/5 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                    Key Challenges
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.challenges}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                                    Solution
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.solution}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.live || "/#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all hover:scale-105"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                                <a
                                    href={project.repo || "/#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
                                >
                                    <FaGithub /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
