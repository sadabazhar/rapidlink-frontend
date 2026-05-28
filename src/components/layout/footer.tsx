import LayoutContainer from './layout-container'
import Logo from '../ui/logo'

const Footer = () => {
  return (
    <footer className="pb-10 pt-10">
      <LayoutContainer>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-(--border) pt-8 md:flex-row">
          {/* Brand */}
          <Logo showSubtitle />

          {/* Copyright */}
          <p className="text-sm text-(--foreground-muted)">
            © 2026 RapidLink. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-6 text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)">
            <a
              href="#"
              className="text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-sm text-(--foreground-muted) transition-colors hover:text-(--foreground)"
            >
              Status
            </a>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  )
}

export default Footer