import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col justify-center py-24 max-w-6xl mx-auto px-6 snap-start"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-primary">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-2xl shadow-xl"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I am a <strong>Frontend Developer and BSCS student</strong> with hands-on experience in React, Next.js, and responsive UI development.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Completed a Frontend Developer internship at <strong>InternnCraft</strong>, working on real-world projects with a strong focus on clean design, performance optimization, and usability.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Also experienced in <strong>CMS development</strong>, delivering both custom-coded and CMS-based solutions using WordPress, Shopify, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { label: "Experience", value: "3+ Years" },
            { label: "Projects", value: "50+" },
            { label: "Clients", value: "20+" },
            { label: "Coffee", value: "∞" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
