import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiAward, FiUsers, FiCode } from 'react-icons/fi'

const highlights = [
  { icon: FiBriefcase, label: 'Software Developer', value: 'Multigenesys Software' },
  // { icon: FiCode, label: 'Freelance', value: 'Open for Projects' },
  { icon: FiMapPin, label: 'Location', value: 'Pune, Maharashtra' },
  { icon: FiAward, label: 'Education', value: 'MCA, Garware College' },
  { icon: FiUsers, label: 'Mentored', value: '100+ Students' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-14 rounded-full" />

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="space-y-5">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a Full-Stack Developer who loves building clean, scalable web apps. Currently working at <span className="text-purple-500 font-semibold">Multigenesys Software</span>, I specialize in React.js, Node.js, and cloud technologies.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I've also mentored <span className="text-purple-500 font-semibold">100+ students</span>, helping them sharpen their coding skills and enhancing their practical abilities.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                Outside my full-time role, I take on <span className="text-cyan-400 font-semibold">freelance projects</span> — got an idea? Let's build it together.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {highlights.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="text-purple-500" size={22} />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1 uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
