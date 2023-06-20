import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Car Rental',
  description: 'Discover the best cars in the town!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
