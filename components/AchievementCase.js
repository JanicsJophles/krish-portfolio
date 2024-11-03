import { motion } from 'framer-motion';
import styled from 'styled-components';

const AchievementWrapper = styled.div`
  // ... other styles
  color: ${({ theme }) => theme.text};
  
  h3 {
    color: ${({ theme }) => theme.text};
  }
  
  p {
    color: ${({ theme }) => theme.secondaryText};
  }
`;

export default function AchievementCase({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-200"
    >
      <div className="flex items-start space-x-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
} 