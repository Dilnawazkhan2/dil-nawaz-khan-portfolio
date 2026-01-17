import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 bg-white/70 dark:bg-white/5 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      <a
        href="#hero"
        onClick={(e) => handleNavClick(e, "hero")}
        className="absolute top-0 left-0 -translate-y-full focus:translate-y-0 bg-primary text-black px-4 py-2 z-[100] transition-transform"
      >
        Skip to Main Content
      </a>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")}><h1 className="text-xl font-bold text-primary">Dil Nawaz Khan</h1></a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium">
            {["Home", "About", "Experience", "Skills", "Services", "Projects", "Why Me", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item === "Home" ? "hero" : item === "Why Me" ? "why-me" : item.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, item === "Home" ? "hero" : item === "Why Me" ? "why-me" : item.toLowerCase())}
                  className={`transition-colors ${activeSection === (item === "Home" ? "hero" : item === "Why Me" ? "why-me" : item.toLowerCase())
                    ? "text-primary font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-blue-400 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/10"
          >
            <ul className="flex flex-col p-6 gap-4 text-center">
              {["Home", "About", "Experience", "Skills", "Services", "Projects", "Why Me", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === "Home" ? "hero" : item === "Why Me" ? "why-me" : item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item === "Home" ? "hero" : item === "Why Me" ? "why-me" : item.toLowerCase())}
                    className={`block text-lg font-medium transition-colors ${activeSection === (item === "Home" ? "hero" : item === "Why Me" ? "why-me" : item.toLowerCase())
                      ? "text-primary"
                      : "text-gray-700 dark:text-gray-300"
                      }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block mt-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-blue-400 transition"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
