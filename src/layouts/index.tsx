import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

interface Props {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-10 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-4">{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
