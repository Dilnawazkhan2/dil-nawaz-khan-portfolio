import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    title: "React Portfolio Website",
    overview: "Modern portfolio built with React and Tailwind CSS, focused on clean UI, responsiveness, and performance.",
    role: "Frontend Developer",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    challenges: "Creating a seamless one-page experience with scroll snapping while maintaining mobile performance.",
    solution: "Used Framer Motion for animations and Tailwind's snap-point utilities for a polished scroll experience.",
  },
  {
    title: "AWS Feedback Application",
    overview: "Serverless feedback form using React and AWS services with secure API integration.",
    role: "Full Stack Developer (Basics)",
    techStack: ["React", "AWS Lambda", "API Gateway", "DynamoDB"],
    challenges: "Connecting frontend to AWS serverless architecture securely.",
    solution: "Leveraged AWS API Gateway to handle requests and Lambda for backend logic.",
  },
  {
    title: "CMS-Based Websites",
    overview: "Developed and customized websites using WordPress, WooCommerce, and Shopify, including design customization and performance optimization.",
    role: "CMS Developer",
    techStack: ["WordPress", "Shopify", "WooCommerce", "Liquid", "PHP"],
    challenges: "Adapting pre-built themes to meet highly specific client performance and design needs.",
    solution: "Customized core theme files and optimized assets to achieve high Lighthouse scores.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 bg-gray-100 dark:bg-white/5 transition-colors duration-300 snap-start px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                {project.overview}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-200 dark:bg-white/5 rounded text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button className="mt-4 text-primary font-medium group-hover:underline text-sm">
                View Details →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
