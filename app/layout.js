import './globals.css'

export const metadata = {
  title: 'Ombygning | Projektportal',
  description: 'Fælles overblik over ombygning, faggrupper og næste ryk.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
