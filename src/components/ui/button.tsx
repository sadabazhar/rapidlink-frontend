import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonSize = 'sm' | 'md' | 'lg' |'icon'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-linear-to-r from-(--primary) to-(--primary-dark) text-(--background) hover:shadow-lg hover:shadow-(--shadow-primary)',

  secondary:
    'border border-(--border) bg-(--surface) text-(--foreground) hover:border-(--primary) hover:bg-(--surface-hover))',

  ghost:
    'bg-transparent text-(--foreground-secondary) hover:bg-(--surface-hover) hover:text-(--foreground)',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10 p-0',
}

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        font-medium
        transition-all
        duration-200
        hover:scale-[1.02]
        active:scale-[0.98]
        disabled:pointer-events-none
        disabled:opacity-50
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button