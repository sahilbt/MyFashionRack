import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head/>
      <body className="w-screen max-w-full bg-darkGrey mr-64">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
