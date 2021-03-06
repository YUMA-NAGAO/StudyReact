import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'


import styles from "./layout.module.css"


export default function Layout({ children }) {
    return <div className={styles.container}>{children}</div>
  }