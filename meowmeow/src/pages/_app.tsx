import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Prompt } from 'next/font/google'
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (<main className={prompt.className}>
    <Component {...pageProps} />
  </main>) 
}
