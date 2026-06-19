'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <i className="ri-sun-line text-base" />
      case 'dark':
        return <i className="ri-moon-line text-base" />
      default:
        return <i className="ri-computer-line text-base" />
    }
  }

  const getThemeLabel = () => {
    if (theme === 'system') return 'System'
    if (theme === 'light') return 'Light'
    return 'Dark'
  }

  return (
    <div className="bg-white flex items-center justify-between w-full px-2 sm:px-4 py-2 transition-colors">
      <div className="flex items-center shrink-0">
        <Image
          src="/logos/logo-h.jpg"
          alt="Logo"
          width={120}
          height={50}
          priority
          className="w-30 h-7 sm:w-50 sm:h-14"
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center mx-2 gap-2 px-3 py-2 text-sm font-medium text-[#001c38] hover:bg-slate-100"
        >
          <i className="ri-global-line text-base text-slate-600 dark:text-slate-400" />
          <span>English</span>
          <i className="ri-arrow-down-s-line text-base text-slate-500 dark:text-slate-400" />
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center mx-2 gap-2 px-3 py-2 text-sm font-medium text-[#001c38] hover:bg-slate-100"
          >
            <span className="flex h-4 w-4 items-center justify-center">
              {getThemeIcon()}
            </span>

            <span>{getThemeLabel()}</span>

            <i className="ri-arrow-down-s-line text-base text-slate-500 dark:text-slate-400" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg z-50 overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  setTheme('system')
                  setIsOpen(false)
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <i className="ri-computer-line text-base" />
                <span>System</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setTheme('light')
                  setIsOpen(false)
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <i className="ri-sun-line text-base" />
                <span>Light</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setTheme('dark')
                  setIsOpen(false)
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <i className="ri-moon-line text-base" />
                <span>Dark</span>
              </button>
            </div>
          )}
        </div>

        <button
          type="button"
          className="flex items-center mx-2 gap-2 px-3 py-2 text-sm font-medium text-[#001c38] hover:bg-slate-100"
          aria-label="Notifications"
        >
          <i className="ri-notification-3-line text-lg" />
        </button>

        <button
          type="button"
          className="rounded-full bg-[#001c38] mx-2 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#003366]"
        >
          Sign in
        </button>
      </div>

    </div>
  )
}         