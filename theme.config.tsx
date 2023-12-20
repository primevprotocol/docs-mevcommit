import React from "react"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import Image from "next/image"
import { useRouter } from "next/router"

const config: DocsThemeConfig = {
  logo: <Image src="/primev-logo.png" width={120} height={0} alt="PRIM𝝣V" />,
  primaryHue: {
    light: 30, // Hue value for light mode (0-360)
    dark: 27, // Hue value for dark mode (0-360)
  },
  primarySaturation: {
    light: 100, // Saturation value for light mode (0-100)
    dark: 82, // Saturation value for dark mode (0-100)
  },
  project: {
    link: "https://github.com/primevprotocol/primev-docs",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/primevprotocol/primev-docs",
  head: function useHead() {
    const { title } = useConfig()
    // const { route } = useRouter()
    // const socialCard =
    //   route === '/' || !title
    //     ? 'https://primev.xyz/og.jpeg'
    //     : `https://primev.xyz/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Prim𝝣v docs" />
        <meta name="og:description" content="Prim𝝣v docs" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image" content={socialCard} /> */}
        {/* <meta name="twitter:site:domain" content="primev.xyz" /> */}
        <meta name="twitter:url" content="https://primev.xyz/" />

        {/* <meta name="og:image" content={socialCard} /> */}
        <meta name="apple-mobile-web-app-title" content="PRIM𝝣V" />
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        /> */}
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - PRIM𝝣V",
      }
    }
  },
  footer: {
    text: "© 2023 Open Source",
  },
}

export default config
