import { motion } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiNextdotjs,
  SiMongodb, SiMysql, SiDocker, SiGit, SiGithub,
  SiBitbucket, SiPostman, SiJira, SiFirebase, SiHtml5, SiCss, SiRedux, SiCloudinary,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#fff' },
      { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#fff' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#fff' },
      { name: 'BitBucket', icon: SiBitbucket, color: '#0052CC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'JIRA', icon: SiJira, color: '#0052CC' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 text-center">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-14 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all"
            >
              <h3 className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-5 flex items-center gap-2">
                <span className="w-6 h-px bg-purple-500" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 group cursor-default"
                  >
                    <Icon size={18} style={{ color }} />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
