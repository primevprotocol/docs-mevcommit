import type { AppProps } from "next/app"
import { Source_Code_Pro } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sourceCodePro.className}>
      <Component {...pageProps} />
      <SpeedInsights />
    </main>
  )
}
