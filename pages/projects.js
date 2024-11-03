import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Zewo Discord Bot",
      description: "A multipurpose chatbot with various features including game stats integration.",
      tech: ['JavaScript', 'Discord.js', 'Node.js'],
      githubLink: "https://github.com/yourusername/zewo",
      image: "/images/zewo.png" // Add project images
    },
    {
      title: "Musica Discord Bot",
      description: "Music recommendation and stats bot integrated with Last.fm API.",
      tech: ['Discord.js', 'Express.js', 'Axios', 'Last.fm API'],
      githubLink: "https://github.com/yourusername/musica",
      image: "/images/musica.png"
    },
    {
      title: "NeuroScanAI",
      description: "AI-powered brain tumor detection system.",
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      githubLink: "https://github.com/yourusername/neuroscanai",
      image: "/images/neuroscan.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects and development work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
} 