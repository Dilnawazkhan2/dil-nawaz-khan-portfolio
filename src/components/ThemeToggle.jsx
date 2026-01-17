import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-yellow-400 hover:scale-110 transition border border-gray-300 dark:border-white/10"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.div>
        </button>
    );
}
