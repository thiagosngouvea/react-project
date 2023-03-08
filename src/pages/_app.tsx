import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Component {...pageProps} />
    </div>
  </main>
  )
}
