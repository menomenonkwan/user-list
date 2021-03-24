import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peoples List | Home</title>
        <meta name="keywords" content="peoples"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur repellendus minima tempora quos veritatis, at placeat unde dolorum quidem architecto harum qui similique incidunt sint cum vero saepe mollitia possimus!</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur repellendus minima tempora quos veritatis, at placeat unde dolorum quidem architecto harum qui similique incidunt sint cum vero saepe mollitia possimus!</p>
        <Link href="/peoples">
          <a className={styles.btn}>See People Listings</a>
        </Link>
      </div>
    </>
  )
}
