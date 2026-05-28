import { Check } from 'lucide-react'

import Button from '@/components/ui/button'
import LayoutContainer from '@/components/layout/layout-container'

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    description:
      'Get started with short links and basic analytics for personal use.',
    features: [
      '100 links',
      'Basic click analytics',
      'RapidLink branded domain',
      '50 QR code generation',
      'Community support',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$5',
    description:
      'Perfect for creators, freelancers, startups, and growing businesses.',
    features: [
      '2,000 links',
      'Real-time analytics',
      'Custom branded domains',
      'Developer API access',
      '1,000 Customizable QR codes',
      'Priority email support',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Business',
    price: '$12',
    description:
      'Advanced tools and higher limits for teams managing large traffic.',
    features: [
      '50,000+ links',
      'Advanced analytics dashboard',
      'Unlimited custom domains',
      'Team collaboration',
      'Webhook integrations',
      'Priority support',
    ],
    cta: 'Contact sales',
    featured: false,
  },
]

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32"
    >
      
      <LayoutContainer className="relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center">

          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl">
            Simple,
            <span className="bg-linear-to-r from-(--primary) to-(--primary-dark) bg-clip-text text-transparent">
              {' '}
              predictable.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-(--foreground-secondary) sm:text-lg">
            Start for free and scale when your traffic grows.
            No hidden fees or surprise limits.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-4xl border p-8 backdrop-blur-2xl transition-all duration-300 ${
                tier.featured
                  ? 'scale-[1.02] border-(--primary)/30 bg-(--surface-hover) shadow-[0_30px_100px_-20px_var(--shadow-primary)]'
                  : 'border-(--border) bg-(--surface) hover:border-(--primary)/20 hover:bg-(--surface-hover)'
              }`}
            >

              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-(--primary) to-(--primary-dark) px-4 py-1.5 text-xs font-semibold text-(--background) shadow-(--shadow-primary)">
                  Most Popular
                </div>
              )}

              {/* Glow */}
              {tier.featured && (
                <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-(--primary)/20 blur-3xl" />
              )}

              {/* Plan Name */}
              <div className="relative mb-2 text-sm font-medium text-(--foreground-secondary)">
                {tier.name}
              </div>

              {/* Price */}
              <div className="relative mb-3 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-(--foreground)">
                  {tier.price}
                </span>

                <span className="mb-1 text-sm text-(--foreground-muted)">
                  /month
                </span>
              </div>

              {/* Description */}
              <p className="relative mb-8 text-sm leading-relaxed text-(--foreground-secondary)">
                {tier.description}
              </p>

              {/* CTA */}
              <Button
                variant={tier.featured ? 'primary' : 'secondary'}
                size="lg"
                className="mb-8 w-full"
              >
                {tier.cta}
              </Button>

              {/* Features */}
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-(--primary)/10 text-(--primary)">
                      <Check className="h-3 w-3" />
                    </div>

                    <span className="text-sm text-(--foreground-secondary)">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </LayoutContainer>
    </section>
  )
}

export default PricingSection