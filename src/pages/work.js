import React from 'react'
import Header from '../components/header'
import Category from '../components/category'

export default () => {
    return(
        <div>
<div class="outer-wrapper">
    <Header />

        <main>
<div className="content">
    <div style={{ color: `#1a1a1d`, fontSize: `3rem`, fontWeight: `bold`, lineHeight: '0'}}>
    <Category categoryText="Work" />
    </div>
    {/*/*<h1 class="categoryheading">Works</h1>*/}
    <div className="spacer"></div>
    <p>
    Down below you can see my latest work.
    </p>
    </div>

    </main>
    </div>
    </div>
 )
}