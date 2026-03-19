import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-scroll'
import toast from 'react-hot-toast'

const roles = ['Full-Stack Developer', 'Freelancer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [nameText, setNameText] = useState('')
  const fullName = 'Vikas Kamankar'

  useEffect(() => {
    let i = 0
    const typeInterval = setInterval(() => {
      setNameText(fullName.slice(0, i + 1))
      i++
      if (i >= fullName.length) clearInterval(typeInterval)
    }, 100)
    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const handleDownload = () => {
    toast.success('Resume download Successfully!')
  }
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {nameText}
            </span>
            <span className={`text-purple-500 ${nameText.length >= fullName.length ? 'hidden' : 'animate-pulse'}`}>|</span>
          </h1>

          <div className="h-10 flex items-center justify-center mb-6">
            {/* <span className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-medium">
              I'm a{' '}
            </span> */}
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl font-bold text-purple-500 dark:text-purple-400 ml-2"
              >
                {roles[roleIndex]}
                {/* <span className="animate-pulse">|</span> */}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building scalable web applications with React.js, Node.js & cloud technologies. Passionate about writing clean code and crafting seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <Link
              to="contact"
              smooth
              duration={500}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all hover:shadow-xl hover:shadow-purple-500/25 cursor-pointer"
            >
              Get in Touch
              <FiArrowRight />
            </Link>
            <a
              href="/vikas_resume.pdf"
              download="Vikas_Kamankar_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-purple-500 hover:text-purple-500 transition-all"
            >
              <FiDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/Kamankarvikas', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vikas-kamankar-74104622a/', label: 'LinkedIn' },
              { icon: SiLeetcode, href: 'https://leetcode.com/u/vikaskamankar60/', label: 'LeetCode' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-500/10 transition-all border border-transparent hover:border-purple-500/20"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link to="about" smooth duration={500} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
