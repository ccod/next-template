import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Lib from '../lib'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
            <h2>Hello World</h2>
            <p>should be a number: { Lib.returns42() }</p>
        </Container>
      </main>

      <footer>
      </footer>

      <style jsx>{``}</style>
      <style jsx global>{``}</style>
    </>
  )
}
