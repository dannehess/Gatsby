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
    <Category categoryText="Hi!" />
    </div>
{/*<h1 class="categoryheading">Hi!</h1>*/}
    <div class="spacer"></div>
    <p>
    My interests in web-development started in my early
years. At that time I was focused on HTML and CSS. 
Now I am also learning JavaScript which I am looking
forward to work with in the future.
    </p>
    </div>
    </main>
    </div>
    </div>
    )
}
