import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  transition: all 0.3s ease;
`;

export default function Layout({ title, children }) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <LayoutWrapper
      style={{ fontFamily: theme.fonts.body }}
      className={`min-h-screen ${isDark ? 'dark' : ''}`}
    >
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        <Head>
          <title>{title ? `${title} | Krish&apos;s Portfolio` : `Krish&apos;s Portfolio`}</title>
          <meta name="description" content="Personal portfolio of Krish Vijayvergia" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav 
          className="fixed top-0 w-full backdrop-blur-md z-50 shadow-sm transition-colors duration-200"
          style={{ backgroundColor: theme.colors.navBg }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/">
                  <span className="text-xl font-bold" style={{ color: theme.colors.primary }}>KV</span>
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">Home</Link>
                <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">About</Link>
                <Link href="/experience" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">Experience</Link>
                <Link href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">Projects</Link>
                <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">Contact</Link>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <FaSun className="text-yellow-400 w-5 h-5" />
                  ) : (
                    <FaMoon className="text-gray-700 w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16 transition-colors duration-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </main>

        <footer className="bg-gray-50 dark:bg-gray-800 mt-20 transition-colors duration-200">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 dark:text-gray-400">© 2024 Krish Vijayvergia</p>
              <div className="flex space-x-6">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">GitHub</a>
                <a href="https://linkedin.com/in/krish-vijayvergia" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">LinkedIn</a>
                <a href="https://www.strava.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">Strava</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LayoutWrapper>
  );
} 