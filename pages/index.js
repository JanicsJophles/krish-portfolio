import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import LottieAnimation from '../components/LottieAnimation';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Hero = styled.div`
  h1, h2 {
    color: ${({ theme }) => theme.text};
  }
  
  p {
    color: ${({ theme }) => theme.secondaryText};
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Hero>
              <Title className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Hi, I&apos;m Krish Vijayvergia
              </Title>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                A passionate developer and athlete from San Antonio, Texas, 
                combining technical innovation with athletic discipline.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    View My Projects
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </Hero>
            <div className="relative h-96">
              <LottieAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</h3>
              <p className="text-gray-600 dark:text-gray-300">Years of Programming</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">#1</h3>
              <p className="text-gray-600 dark:text-gray-300">State Championship</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
