import React from 'react'
import Header from '../components/header'
import Category from '../components/category'

export default () => {
    return(
<div>
<div class="outer-wrapper">
    <Header />

        <main>
<div class="content">

<div style={{ color: `#1a1a1d`, fontSize: `3rem`, fontWeight: `bold`, lineHeight: '0'}}>
    <Category categoryText="Contact" />
    </div>

    {/*<h1 class="categoryheading">Contact</h1>*/}
    <div class="spacer"></div>
    <p>Use the form below to get in touch.
    </p>
    <div class="spacer"></div>
    </div>

    </main>
    </div>
    </div>
    )
}
