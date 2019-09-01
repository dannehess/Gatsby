import React from "react"
import Layout from "../components/layout"
import styles from "../pages/main-modules.css"
import Chartone from "../components/chartone"
import Charttwo from "../components/charttwo"
import Chartthree from "../components/chartthree"

export default () => (

  <Layout>
    <div>
    <section className={styles.section}>

        <h1 style={{ marginTop: `0`, fontSize: `4rem`, fontFamily: `Montserrat` }}>Hi!</h1>
        <p>
            My name is Daniel Hessling and I am currently studying Front-End Development at Nackademin in Stockholm, Sweden.
        </p>
        <p>
The purpose of this website is to show who I am, projects I have done by myself or being a part of, at Nackademin.
</p>
        </section>
        <section className={styles.section}>
        <Chartone />
        </section>

        <section className={styles.section}>
        <Charttwo />
        </section>

        <section className={styles.section}>
        <Chartthree />
</section>
</div>
</Layout>
)