import { useEffect, useState } from 'react'

/** Dark/light theme. The initial value comes from the class that the script in index.html sets before React loads. */
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [dark])
  return { dark, toggle: () => setDark((d) => !d) }
}
