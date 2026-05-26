import {
  BarChart3,
  Code2,
  GitBranch,
  QrCode,
  Shield,
  Zap,
} from 'lucide-react'

import LayoutContainer from '@/components/layout/layout-container'

const features = [
  {
    icon: Zap,
    title: 'Edge redirects',
    description:
      'Sub-30ms redirects powered by globally distributed edge infrastructure.',
  },
  {
    icon: BarChart3,
    title: 'Live analytics',
    description:
      'Track clicks, devices, countries, and traffic sources in real time.',
  },
  {
    icon: Code2,
    title: 'Developer API',
    description:
      'Create and manage short links programmatically using a simple REST API.',
  },
  {
    icon: Shield,
    title: 'Custom domains',
    description:
      'Use branded domains with automatic SSL provisioning and DNS support.',
  },
  {
    icon: QrCode,
    title: 'Dynamic QR codes',
    description:
      'Generate, customize, and track QR codes for marketing campaigns.',
  },
  {
    icon: GitBranch,
    title: 'Smart routing',
    description:
      'Split traffic intelligently with weighted redirects and A/B testing.',
  },
]

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative py-24 sm:py-32"
    >

      <LayoutContainer className="relative z-10">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">

          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl">
            More than just
            <span className="bg-linear-to-r from-(--primary) to-(--primary-dark) bg-clip-text text-transparent">
              {' '}
              short links.
            </span>
          </h2>

          <p className="text-base leading-relaxed text-(--foreground-secondary) sm:text-lg">
            Track analytics, manage branded links, generate QR codes,
            and simplify link sharing from one powerful platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-(--border) bg-(--surface) p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/30 hover:bg-(--surface-hover) hover:shadow-[0_20px_80px_-20px_var(--shadow-primary)]"
            >
              {/* Glow Effect */}
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-(--primary)/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border) bg-(--primary)/10 text-(--primary) transition-all duration-300 group-hover:scale-110 group-hover:bg-(--primary)/15">
                <feature.icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="mb-3 text-lg font-semibold text-(--foreground)">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-(--foreground-secondary)">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  )
}

export default FeaturesSection