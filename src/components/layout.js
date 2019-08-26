import React, { hildren } from 'react'
import Header from './header'
import { checkPropTypes } from '../../../../Library/Caches/typescript/3.5/node_modules/@types/prop-types';

const Layout = (props) => {
    return(
        <Layout>
            <Header />
            <div class="outer-wrapper">
                <main>
                    <div class="content">
            {props.children}
                    </div>
                </main>
            </div>
        </Layout>
    )
}

export default Layout