import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Alert from '../../components/Alert'

export default function FirstPost() {
  const [alertType, setAlertType] = useState('success')
  const changeAlertType = () => {
    console.log(alertType)
    setAlertType(alertType === 'success' ? 'error' : 'success')
  }

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Alert type={alertType}>アラートです</Alert>
      <button onClick={changeAlertType}>アラートの色変えるよ</button>
    </Layout>
  )
}
