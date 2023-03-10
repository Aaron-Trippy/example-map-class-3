import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/About.module.css'
import data from '../data/workplace.json'
import { useState } from 'react'
import Team from '../components/Team/index.js'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    console.log(data);
    const [information, setInformation] = useState([...data])

    return (
        <>
          <Head>
            <title>About</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <Link href="">Meet Our Team!</Link>
    
          <div className={styles.employeeCard}>
          {
            information && information.map((info, index) => {
              if(info.employer.toLowerCase() === "trippy") {
              return(
                <Team key={index} name={info.name}/>
              )
              }
            })
          }
          </div>
              <div>
              <Link href="/" className={styles.home}>Home</Link>
              </div>
          </main>
        </>
      )
    }
    