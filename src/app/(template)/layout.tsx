import MenuSidebar from '@/src/components/MenuSidebar'
import React from 'react'

const Template = ({ children } : { children: React.ReactNode }) => {
    return (
        <section>
            <header className="header">
                Header
                <MenuSidebar />
            </header>
            <main className="main-container">
                { children }
            </main>
            <footer className="footer">Footer</footer>
        </section>
    )
}

export default Template
