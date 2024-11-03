import { motion } from 'framer-motion';
import styled from 'styled-components';

const TimelineContent = styled.div`
  color: ${({ theme }) => theme.text};
  
  .timeline-date {
    color: ${({ theme }) => theme.secondaryText};
  }
`;

const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.text};
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.secondaryText};
`;

const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const DateContainer = styled.div`
  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 0.5rem;
  }
`;

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: 'Mobile Software Engineer',
      company: 'AltHQ',
      date: 'May - August 2024',
      description: 'Developed mobile app MVP from scratch, leading development and collaborating with mentors.',
      icon: '💼'
    },
    {
      title: 'Cross Country Captain',
      company: 'Great Hearts Northern Oaks',
      date: '2019-2024',
      description: 'Led team to UIL 3A State Championship, earned All-State honors.',
      icon: '🏃'
    },
    {
      title: 'AI Camp',
      company: 'Programmer/Ambassador',
      date: 'July 2023',
      description: 'Created NeuroScanAI for brain tumor detection with a team of 5.',
      icon: '🤖'
    }
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="relative mb-12"
        >
          <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-200">
                <div className="text-3xl mb-4">{experience.icon}</div>
                <TimelineTitle className="text-gray-900 dark:text-white">{experience.title}</TimelineTitle>
                <p className="text-gray-900 dark:text-white mb-2">{experience.company}</p>
                <p className="text-sm text-gray-900 dark:text-white mb-4">{experience.date}</p>
                <TimelineDescription className="text-gray-900 dark:text-white">{experience.description}</TimelineDescription>
              </div>
            </div>
            <div className="mx-8">
              <div className="w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-900 shadow"></div>
            </div>
            <div className="flex-1"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 