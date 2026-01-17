import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="min-h-screen flex flex-col justify-center py-24 px-6 snap-start"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-2xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Interested in working together or discussing a project?
                I'm available for freelance, internships, and junior frontend roles.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email Me</p>
                    <p className="font-medium">dilnawaz@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Call Me</p>
                    <p className="font-medium">+1 (234) 567-890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-200">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium">New York, NY, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Follow Me</p>
              <div className="flex gap-4">
                {[FaLinkedin, FaGithub, FaTwitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="/#"
                    className="w-10 h-10 bg-white/50 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-700 dark:text-white hover:bg-primary hover:text-white transition-all hover:scale-110"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-2xl shadow-xl space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors dark:text-white placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors dark:text-white placeholder-gray-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors dark:text-white placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors dark:text-white placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-opacity-90 transition-all hover:scale-[1.02] shadow-lg"
            >
              Send Message
            </button>
          </motion.form>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm italic">
            Building modern web experiences with clean code and strong attention to detail.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
