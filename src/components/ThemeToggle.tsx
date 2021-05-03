import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import SunIcon from '../icons/sun.svg'
import MoonIcon from '../icons/moon.svg'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  return (
    <button
      className="text-black dark:text-white p-0.5 rounded-sm focus:outline-none focus:ring focus:border-blue"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted &&
        (theme === 'dark' ? (
          <SunIcon className="text-2xl fill-current" />
        ) : (
          <MoonIcon className="text-2xl fill-current" />
        ))}
    </button>
  )
}

export default ThemeToggle
