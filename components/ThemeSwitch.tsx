"use client"
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0)
  const themes = ['light', 'dark' ];

  const themeSwitch = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextIndex);
    setTheme(themes[nextIndex]);
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
      onClick={themeSwitch}
    > 
    

      {theme}
      <div>
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <div className='bg-gray-900 w-8 h-3 text-white dark:bg-teal-900 dark:text-white gold:bg-yellow-400'>

          </div>
        ) : (
          <div className='bg-gray-200 w-8 h-3 dark:bg-teal-100 dark:text-gray-900 gold:bg-yellow-400'>

          </div>
        )}
      </div>
    </button>
  )
}

export default ThemeSwitch
