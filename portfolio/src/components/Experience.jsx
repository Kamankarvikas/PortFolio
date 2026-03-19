import { motion } from 'framer-motion'
import { FiBriefcase, FiBookOpen } from 'react-icons/fi'

const experience = [
  {
    type: 'work',
    title: 'Software Engineer',
    org: 'Multigenesys Software Pvt Ltd',
    location: 'Pune, Maharashtra',
    period: 'Aug 2024 - Present',
    points: [
      'Developed responsive and reusable UI components using React.js, managed state using Redux Toolkit and Context API, and implemented authentication and authorization for secure token handling and protected routes.',
      'Designed and integrated scalable RESTful API consumption using RTK Query, enabling efficient caching and reducing redundant API calls.',
      'Designed and developed secure RESTful APIs using Node.js and Express.js, and optimized MongoDB queries and schemas using Mongoose indexing and aggregation.',
      'Implemented JWT-based authentication and role-based authorization to secure backend APIs.',
      'Containerized applications using Docker and integrated AWS services such as S3, Cognito, IAM, and SQS for storage, authentication, and messaging.',
    ],
  },
]

const education = [
  {
    type: 'edu',
    title: 'Master of Computer Application (MCA)',
    org: 'MES, Abasaheb Garware College Pune',
    location: 'Pune, Maharashtra',
    period: '2022 - 2024',
  },
  {
    type: 'edu',
    title: "Bachelor's Computer Science (BCS)",
    org: 'CMCS College Nashik',
    location: 'Nashik, Maharashtra',
    period: '2019 - 2022',
  },
]

function TimelineItem({ item, index }) {
  const isWork = item.type === 'work'
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-3 top-10 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />

      {/* Timeline dot */}
      <div className={`absolute left-0 top-2 w-7 h-7 rounded-full flex items-center justify-center border-2 ${
        isWork
          ? 'bg-purple-500/10 border-purple-500 text-purple-500'
          : 'bg-cyan-500/10 border-cyan-400 text-cyan-400'
      }`}>
        {isWork ? <FiBriefcase size={13} /> : <FiBookOpen size={13} />}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-500">{item.period}</span>
        </div>
        <p className="text-sm font-medium text-purple-500 dark:text-purple-400 mb-1">{item.org}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">{item.location}</p>

        {item.points && (
          <ul className="space-y-3">
            {item.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-14 rounded-full" />

          <div className="mb-14">
            <h3 className="text-sm font-bold text-purple-500 uppercase tracking-wider mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-purple-500" />
              Work Experience
            </h3>
            {experience.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>

          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-8 flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-400" />
              Education
            </h3>
            {education.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
