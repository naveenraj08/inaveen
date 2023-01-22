import React from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children }) => {
    return (
        <div className='font-Rubik'>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
