import clsx from 'clsx';
import { AuthContext } from '../contexts/AuthContext';
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
        <AuthContext>
            <html lang='en'>
                <body className='text-foreground bg-background'>
                    <header className='fixed top-0 left-0 flex items-center w-screen h-14'>
                        <PrimeNav />
                    </header>
                    <main className={clsx(
                        'p-4 mt-14'
                    )}>
                        {children}
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </body>
            </html>
        </AuthContext>
    )
}
export default Layout;