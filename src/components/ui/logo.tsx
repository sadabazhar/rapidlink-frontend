import { Link2 } from 'lucide-react'

type LogoProps = {
  showText?: boolean,
    showSubtitle?: boolean,
}

const Logo = ({ showText = true, showSubtitle = false }: LogoProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-(--primary) to-(--primary-dark) shadow-(--shadow-primary)">
        <Link2
          className="h-4 w-4 text-(--background)"
          strokeWidth={2.5}
        />
      </div>

      {/* Text Content */}
      {showText && (
        <div className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight text-(--foreground)">
            Rapid
            <span className="text-(--primary)">Link</span>
          </span>

          {showSubtitle && (
            <span className="text-xs text-(--foreground-secondary)">
              Fast links with real-time analytics
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default Logo