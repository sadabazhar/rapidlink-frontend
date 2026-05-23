import { Github } from 'lucide-react'
import Button from '@/components/ui/button'
import LayoutContainer from './layout-container'
import Logo from '../ui/logo'

const navItems = [
  {
    label: 'Features',
    href: '#features',
  },
  {
    label: 'Analytics',
    href: '#analytics',
  },
  {
    label: 'Pricing',
    href: '#pricing',
  },
]

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full pt-4">
      <LayoutContainer>
        <div className="flex h-16 items-center justify-between rounded-2xl border border-(--border) bg-(--surface) px-5 backdrop-blur-xl">
          {/* Logo */}
          <a
            href="/"
            className="transition-opacity hover:opacity-90"
          >
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-(--foreground-secondary) transition-colors duration-200 hover:text-(--foreground)"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/sadabazhar/rapidlink-frontend"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Button
                variant="secondary"
                size="icon"
                className="hidden sm:inline-flex"
              >
                <Github className="h-4 w-4" />
              </Button>
            </a>

            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Sign In
            </Button>

            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </LayoutContainer>
    </header>
  )
}

export default Navbar