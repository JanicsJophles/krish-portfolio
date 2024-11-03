import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AchievementCase from '../components/AchievementCase';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const AboutContent = styled.div`
  color: ${({ theme }) => theme.text};
  
  p {
    color: ${({ theme }) => theme.secondaryText};
  }
  
  h1, h2, h3 {
    color: ${({ theme }) => theme.text};
  }
`;

export default function About() {
  const achievements = [
    {
      category: "Athletics",
      items: [
        {
          title: "UIL 3A State Championship",
          description: "Led team to 1st place at UIL 3A State Championships (2023)",
          icon: "🏆"
        },
        {
          title: "All-State Honors",
          description: "Earned All-State honors placing 16th (2023) and 19th (2024)",
          icon: "🏃"
        }
      ]
    },
    {
      category: "Leadership",
      items: [
        {
          title: "Cross Country Captain",
          description: "Led team to multiple district championships and recruited 30+ middle school athletes",
          icon: "👥"
        },
        {
          title: "Model UN Co-Leader",
          description: "Received Best Small School Delegation award at MUNSA '24",
          icon: "🌍"
        }
      ]
    },
    {
      category: "Technical",
      items: [
        {
          title: "Mobile Software Engineer",
          description: "Developed mobile app MVP at AltHQ from scratch",
          icon: "📱"
        },
        {
          title: "AI Development",
          description: "Created NeuroScanAI for brain tumor detection",
          icon: "🤖"
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a student-athlete passionate about technology and leadership, 
            constantly pushing boundaries in both sports and software development.
          </p>
        </motion.div>

        {/* Achievements Section */}
        <div className="space-y-16">
          {achievements.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((achievement, i) => (
                  <AchievementCase
                    key={i}
                    title={achievement.title}
                    description={achievement.description}
                    icon={achievement.icon}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Journey</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As a senior at Great Hearts Northern Oaks, I've balanced my passion for technology 
            with competitive athletics. My experience as Cross Country Captain taught me valuable 
            leadership skills that I apply to my software development projects. Whether I'm leading 
            my team to a state championship or developing innovative applications, I bring the same 
            dedication and drive to everything I do.
          </p>
        </motion.div>
      </div>
    </Layout>
  );
} 