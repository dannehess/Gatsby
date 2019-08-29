import React from "react"
import Layout from "../components/layout"
import styles from "../pages/main-modules.css"

export default () => (
    <Layout>
      <section className={styles.section}>
        <h1 style={{ marginTop: `0`, fontSize: `3rem`,  }}>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </section>
  </Layout>
)