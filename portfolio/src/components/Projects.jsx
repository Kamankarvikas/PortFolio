import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Real-Estate Platform',
    period: 'Dec 2023 - Jan 2024',
    description: 'A comprehensive online platform to streamline the process of buying, selling, and renting properties, helping users find their ideal homes.',
    points: [
      'Built backend with Node.js and Express.js, stored data in MongoDB',
      'Developed frontend using React.js with Redux Toolkit for state management',
      'Implemented JWT authentication and API communication using Axios',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'JWT'],
    github: 'https://github.com/Kamankarvikas/Real-Estate',
    live: 'https://real-estate-opal-tau.vercel.app/'
  },
  {
    title: 'Opportunity Hub',
    period: 'Oct 2023 - Nov 2023',
    description: 'A platform to increase awareness among students about high-paying companies and the latest off-campus job and internship opportunities.',
    points: [
      'Implemented RESTful API communication using Axios for efficient data retrieval',
      'Built backend with Node.js and Express.js, stored data in MongoDB',
      'Developed frontend using React.js with JWT-based authentication',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Axios', 'JWT'],
    github: 'https://github.com/Kamankarvikas/Opportunity-Hub',
    live: 'https://opportunity-hub-fe8z.vercel.app/'
  },
  {
    title: 'Online Railway Reservation',
    period: 'Jun 2023 - Jul 2023',
    description: 'A railway reservation system allowing administrators to manage trains, schedules, reservations, and enquiries with seamless ticket booking.',
    points: [
      'Implemented AJAX and jQuery for asynchronous data fetching',
      'Enabled users to search trains, view schedules, and book tickets seamlessly',
      'Built with PHP backend, Bootstrap frontend, and MySQL database',
    ],
    tech: ['PHP', 'JavaScript', 'jQuery', 'MySQL', 'Bootstrap', 'AJAX'],
    github: 'https://github.com/Kamankarvikas/online-railway-reservation',
    live: 'https://github.com/Kamankarvikas/online-railway-reservation'
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
    > 
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-purple-500 to-cyan-400" />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors mb-1">
              {project.title}
            </h3>
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-500">
              {project.period}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl text-gray-400 hover:text-purple-500 hover:bg-purple-500/10 transition-all">
              <FiGithub size={18} />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl text-gray-400 hover:text-cyan-500 hover:bg-cyan-500/10 transition-all">
              <FiExternalLink size={18} />
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">{project.description}</p>

        <ul className="space-y-2 mb-6">
          {project.points.map((point, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-gray-500 dark:text-gray-400">
              <span className="mt-2 w-1 h-1 rounded-full bg-purple-500 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-14 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
