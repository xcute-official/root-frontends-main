import Footer from './_components/Footer';
import PrimeNav from './_components/PrimeNav';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'devhub',
    description: 'meeting center for all developers'
}

interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({children}: LayoutProps)=>{
    return (
        <html lang='en'>
            <body className='text-foreground bg-background'>
                <header className='sticky w-screen'>
                    <PrimeNav />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
export default Layout;