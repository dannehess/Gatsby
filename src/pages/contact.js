import React from "react"
import Layout from "../components/layout"
import styles from "../pages/main-modules.css"

export default () => (
  <Layout>
    <section className={styles.section}>
    <h1 style={{ marginTop: `0`, fontSize: `3rem`, fontFamily: `Montserrat` }}>Contact me</h1>
    <p>If you want to contact me, you can get in touch via my mail:</p>
    <p>
      <a href="mailto:daniel.hessling@gmail.com" style={{fontSize: 24, color: 'black', textDecoration: 'none', background: '#1a1a1d', color: 'white', padding: 8}}>daniel.hessling@gmail.com</a>
    </p><br></br>
    <p>You can also get in touch with me at:</p>
    
    <a href="https://www.linkedin.com/in/danielhessling" alt=" " target="_blank" style={{fontSize: 24, color: 'black', textDecoration: 'none', background: '#1a1a1d', color: 'white', padding: 8}}>LinkedIn</a><br></br><br></br>
    <a href="https://twitter.com/dannehess" alt=" " target="_blank" style={{fontSize: 24, color: 'black', textDecoration: 'none', background: '#1a1a1d', color: 'white', padding: 8}}>Twitter</a>
    
    </section>
    </Layout>
)