import Link from 'next/link'

import ThemeToggle from '@components/ThemeToggle'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <Link href="/">
        <a>
          <h1 className="font-black text-xl">MyApp</h1>
        </a>
      </Link>
      <nav className="flex items-center">
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Navbar
