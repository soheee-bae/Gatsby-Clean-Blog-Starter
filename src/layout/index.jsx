import React from 'react'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'

import './index.scss'

export class Layout extends React.Component {
    render() {
        const {children} = this.props

        return (
            <React.Fragment>
                <div className='container'>
                    <div className='innerContainer'>
                        <Navbar />
                        {children}
                    </div>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}