import React from "react"
import Layout from "../components/layout"
import styles from "../pages/main-modules.css"

export default () => (
  <Layout>
    <section className={styles.section}>
    <h1 style={{ marginTop: `0`, fontSize: `3rem`,  }}>Contact me</h1>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:daniel.hessling@gmail.com">daniel...@hemligmail.com</a>
    </p>
    </section>
    </Layout>
)