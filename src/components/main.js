import React from "react"
import styles from "../pages/main-modules.css"

export default ({ children }) => (

    <main className={styles.main}>
    <div>
        {children}
</div>
</main>
)