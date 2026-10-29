// Fun little easter egg for anyone who opens the browser console.
// console.log can style text with "%c" + CSS, so big ASCII letters can be coloured line by line.

const w = window as unknown as { __skArt?: boolean }

if (!w.__skArt) {
  w.__skArt = true

  const lines: string[] = ["███████╗██╗  ██╗██████╗ ███████╗██╗   ██╗ █████╗ ███████╗", "██╔════╝██║  ██║██╔══██╗██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝", "███████╗███████║██████╔╝█████╗   ╚████╔╝ ███████║███████╗", "╚════██║██╔══██║██╔══██╗██╔══╝    ╚██╔╝  ██╔══██║╚════██║", "███████║██║  ██║██║  ██║███████╗   ██║   ██║  ██║███████║", "╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝", "", "██╗  ██╗ ██████╗ ██╗    ██╗███╗   ██╗██████╗ ██╗███╗   ██╗██╗   ██╗ █████╗", "██║ ██╔╝██╔═══██╗██║    ██║████╗  ██║██╔══██╗██║████╗  ██║╚██╗ ██╔╝██╔══██╗", "█████╔╝ ██║   ██║██║ █╗ ██║██╔██╗ ██║██║  ██║██║██╔██╗ ██║ ╚████╔╝ ███████║", "██╔═██╗ ██║   ██║██║███╗██║██║╚██╗██║██║  ██║██║██║╚██╗██║  ╚██╔╝  ██╔══██║", "██║  ██╗╚██████╔╝╚███╔███╔╝██║ ╚████║██████╔╝██║██║ ╚████║   ██║   ██║  ██║", "╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝"]

  // purple -> cyan gradient, one colour per line
  const from = [124, 108, 255]
  const to = [53, 214, 255]
  const colour = (t: number) => `rgb(${from.map((f, i) => Math.round(f + (to[i] - f) * t)).join(',')})`
  const last = Math.max(lines.length - 1, 1)

  console.log(
    lines.map((l) => `%c${l}`).join('\n'),
    ...lines.map((_, i) => `color:${colour(i / last)};font-family:monospace;font-size:12px;line-height:1.15`),
  )
  console.log(
    '%cHey, curious how this site is built? React + Vite + Tailwind + Framer Motion. Say hi: skowndinya518@gmail.com',
    'color:#7c6cff;font-weight:bold;font-size:13px;padding:6px 0',
  )
}

export {}
