import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { BsSun, BsMoonStars } from 'react-icons/bs'
import { FiDownload } from 'react-icons/fi'
import toast from 'react-hot-toast'

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="hero" smooth duration={500} className="cursor-pointer">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                VK
              </span>
            </Link>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to work
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-70}
                duration={500}
                activeClass="!text-purple-500"
                className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <BsSun size={18} /> : <BsMoonStars size={18} />}
            </button>

            <a
              href="/vikas_resume.pdf"
              download="Vikas_Kamankar_Resume.pdf"
              onClick={() => toast.success('Resume download Successfully!')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              <FiDownload size={16} />
              Resume
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-500 rounded-lg cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/vikas_resume.pdf"
            download="Vikas_Kamankar_Resume.pdf"
            onClick={() => toast.success('Resume download Successfully!')}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-purple-600 dark:text-purple-400"
          >
            <FiDownload size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
