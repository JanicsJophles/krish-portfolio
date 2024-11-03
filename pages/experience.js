import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ExperienceTimeline from '../components/ExperienceTimeline';

export default function Experience() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Experience</h1>
          <p className="text-xl text-gray-900 dark:text-white max-w-3xl mx-auto">
            A journey through my professional development, leadership roles, and key achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ExperienceTimeline />
        </motion.div>
      </motion.div>
    </Layout>
  );
} 