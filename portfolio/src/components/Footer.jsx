import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiHeart } from 'react-icons/fi'

const socials = [
  { icon: FaGithub, href: 'https://github.com/Kamankarvikas', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vikas-kamankar-74104622a/', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/vikaskamankar60/', label: 'LeetCode' },
]

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            Built with <FiHeart className="text-purple-500" size={14} /> by{' '}
            <span className="font-semibold text-gray-700 dark:text-gray-300">Vikas Kamankar</span>
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
