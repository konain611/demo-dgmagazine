'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'system' | 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  effectiveTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored && (stored === 'system' || stored === 'light' || stored === 'dark')) {
      setTheme(stored)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)

    const root = document.documentElement
    const body = document.body
    root.classList.remove('light', 'dark')
    body.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
      body.classList.add(systemTheme)
      setEffectiveTheme(systemTheme)
    } else {
      root.classList.add(theme)
      body.classList.add(theme)
      setEffectiveTheme(theme)
    }
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      if (theme === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light'
        document.documentElement.classList.remove('light', 'dark')
        document.body.classList.remove('light', 'dark')
        document.documentElement.classList.add(systemTheme)
        document.body.classList.add(systemTheme)
        setEffectiveTheme(systemTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
