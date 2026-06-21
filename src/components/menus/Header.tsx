'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const { theme, setTheme } = useTheme()

  const [openMenu, setOpenMenu] = useState<'language' | 'theme' | 'notifications' | null>(null)

  const languageRef = useRef<HTMLDivElement>(null)
  const themeRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node

      const clickedInsideLanguage = languageRef.current?.contains(target)
      const clickedInsideTheme = themeRef.current?.contains(target)
      const clickedInsideNotifications = notificationsRef.current?.contains(target)

      if (!clickedInsideLanguage && !clickedInsideTheme && !clickedInsideNotifications) {
        setOpenMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleMenu = (menu: 'language' | 'theme' | 'notifications') => {
    setOpenMenu((prev) => (prev === menu ? null : menu))
  }

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
    <div className="bg-white flex items-center justify-between w-full px-2 sm:px-4 py-1 ">
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
        {/* Language dropdown */}
        <div className="relative" ref={languageRef}>
          <button
            type="button"
            onClick={() => toggleMenu('language')}
            className="flex items-center mx-2 gap-2 px-3 py-2 text-sm font-medium text-[#001c38] hover:bg-slate-100"
          >
            <i className="ri-global-line text-base text-slate-600 dark:text-slate-400" />
            <span>English</span>
            <i className="ri-arrow-down-s-line text-base text-slate-500 dark:text-slate-400" />
          </button>

          {openMenu === 'language' && (
            <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg z-50 overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenMenu(null)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <span>English</span>
              </button>

              <button
                type="button"
                onClick={() => setOpenMenu(null)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <span>اردو (Urdu)</span>
              </button>

              <button
                type="button"
                onClick={() => setOpenMenu(null)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <span>العربية (Arabic)</span>
              </button>
            </div>
          )}
        </div>

        {/* Theme dropdown */}
        <div className="relative" ref={themeRef}>
          <button
            type="button"
            onClick={() => toggleMenu('theme')}
            className="flex items-center mx-2 gap-2 px-3 py-2 text-sm font-medium text-[#001c38] hover:bg-slate-100"
          >
            <span className="flex h-4 w-4 items-center justify-center">
              {getThemeIcon()}
            </span>

            <span>{getThemeLabel()}</span>

            <i className="ri-arrow-down-s-line text-base text-slate-500 dark:text-slate-400" />
          </button>

          {openMenu === 'theme' && (
            <div className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg z-50 overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  setTheme('system')
                  setOpenMenu(null)
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
                  setOpenMenu(null)
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
                  setOpenMenu(null)
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <i className="ri-moon-line text-base" />
                <span>Dark</span>
              </button>
            </div>
          )}
        </div>

        {/* Notifications dropdown */}
        <div className="relative" ref={notificationsRef}>
          <button
            type="button"
            onClick={() => toggleMenu('notifications')}
            className="flex items-center mx-2 gap-2 px-3 py-2 text-sm font-medium text-[#001c38] hover:bg-slate-100"
            aria-label="Notifications"
          >
            <i className="ri-notification-3-line text-lg" />
          </button>

          {openMenu === 'notifications' && (
            <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                <span className="text-sm font-semibold text-[#001c38] dark:text-slate-200">
                  Notifications
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 px-4 py-8 text-center">
                <i className="ri-notification-off-line text-2xl text-slate-400" />
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  No notifications
                </span>
              </div>
            </div>
          )}
        </div>

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