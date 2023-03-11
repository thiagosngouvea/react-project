import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main>
      <div className={"bg-gray-50 dark:bg-gray-900"}>
          <Component {...pageProps} />
      </div>
    </main>
  )
}
