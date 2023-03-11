import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <main>
      <div className={ router.pathname !== "/" ? "bg-gray-50 dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900"}>
          <Component {...pageProps} />
      </div>
    </main>
  )
}
