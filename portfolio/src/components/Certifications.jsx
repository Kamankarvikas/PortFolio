import { motion } from 'framer-motion'
import { FiExternalLink, FiAward } from 'react-icons/fi'

const certifications = [
  {
    title: 'JavaScript',
    issuer: 'HackerRank',
    link: 'https://drive.google.com/file/d/1WCoUiLQ-sazukXRutM-h7jm8vkHn1mDE/view',
  },
  {
    title: 'Frontend Developer(React)',
    issuer: 'HackerRank',
    link: 'https://drive.google.com/file/d/1IuoeplEKym3j8LWkaBpH7u02DXYGp1Pk/view',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-14 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="group flex items-start gap-5 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <FiAward className="text-purple-500" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
              </div>
              <FiExternalLink className="text-gray-400 group-hover:text-purple-500 transition-colors shrink-0 mt-1" size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
