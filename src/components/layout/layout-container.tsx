import type { ReactNode } from 'react'

// Props accepted by LayoutContainer
type LayoutContainerProps = {
  children: ReactNode
  className?: string
}

// Reusable wrapper for consistent page width and spacing
const LayoutContainer = ({
  children,
  className = '',
}: LayoutContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default LayoutContainer