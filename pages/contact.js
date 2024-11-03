import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout';
import { FaGithub, FaLinkedin, FaStrava } from 'react-icons/fa';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Make form inputs more touch-friendly
const Input = styled.input`
  padding: 12px;
  
  @media (max-width: 768px) {
    padding: 16px;
    font-size: 16px; // Prevents zoom on iOS
  }
`;

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formState);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      url: 'https://github.com/JanicsJophles',
      color: 'text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      url: 'https://linkedin.com/in/https://www.linkedin.com/in/krish-vijayvergia-33b54928b/',
      color: 'text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Strava',
      icon: <FaStrava className="text-2xl" />,
      url: 'https://www.strava.com/athletes/86482587',
      color: 'text-gray-600 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400'
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Let&apos;s Connect</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Feel free to reach out for collaborations or just to say hi!
          </p>
        </motion.div>

        <ContactContainer>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 h-10"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </ContactForm>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Connect With Me</h2>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-gray-600 ${link.color}`}
                    whileHover={{ x: 10 }}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Location</h2>
              <p className="text-gray-900 dark:text-white">San Antonio, Texas</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Email</h2>
              <a href="mailto:krishwinrocks@gmail.com" className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
                krishwinrocks@gmail.com
              </a>
            </div>
          </motion.div>
        </ContactContainer>
      </div>
    </Layout>
  );
} 