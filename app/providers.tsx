"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { type ReactNode, useEffect } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "@/lib/i18n"

export function Providers({ children }: { children: ReactNode }) {
  // Initialize i18n on the client side
  useEffect(() => {
    // This ensures i18n is initialized on the client side
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </I18nextProvider>
  )
}

