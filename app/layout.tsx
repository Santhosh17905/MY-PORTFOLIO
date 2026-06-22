import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://santhosh-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Santhosh S — AI/ML Engineer',
    template: '%s | Santhosh S',
  },
  description:
    'AI & Machine Learning Enthusiast specializing in Python, Machine Learning, and Data Analysis. Portfolio of 30+ production-minded AI/ML projects.',
  keywords: [
    'Santhosh S',
    'AI Engineer',
    'Machine Learning Engineer',
    'Data Analysis',
    'Python',
    'Portfolio',
    'Electronics and Communication Engineering',
    'Santhosh S portfolio',
    'Santhosh S ai ml projects',
    'Santhosh S machine learning',
    'Santhosh S data analysis',
    'Santhosh S python projects',
    'Santhosh S AI/ML Engineer',
    'Santhosh S AI Enthusiast',
    'Santhosh S Machine Learning Enthusiast',
    'Santhosh S Data Analysis Enthusiast',
    'Santhosh S Python Enthusiast',
    'Santhosh17905 portfolio',
    'Santhosh17905 ai ml projects',
    'Santhosh17905 machine learning',
    'Santhosh17905 data analysis',
  ],
  authors: [{ name: 'Santhosh S' }],
  creator: 'Santhosh S',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Santhosh S — AI/ML Engineer',
    description:
      'AI & Machine Learning Enthusiast with 30+ projects across Python, Machine Learning, and Data Analysis.',
    siteName: 'Santhosh S Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santhosh S — AI/ML Engineer',
    description:
      'AI & Machine Learning Enthusiast with 30+ projects across Python, Machine Learning, and Data Analysis.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
