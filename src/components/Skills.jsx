import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiJoomla, SiWix, SiShopify, SiAmazonwebservices } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    title: "CMS & E-commerce",
    skills: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Shopify", icon: <SiShopify /> },
      { name: "Wix", icon: <SiWix /> },
      { name: "Joomla", icon: <SiJoomla /> },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Git & GitHub", icon: <FaGithub /> },
      { name: "AWS Basics", icon: <SiAmazonwebservices /> },
    ],
  },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
      className="min-h-screen flex flex-col justify-center py-24 max-w-6xl mx-auto px-6 snap-start"
    >
      <h2 className="text-4xl font-bold mb-16 text-center text-primary">Skills</h2>

      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 p-4 rounded-xl flex flex-col items-center gap-2 shadow-lg"
                >
                  <div className="text-3xl text-primary">{skill.icon}</div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
