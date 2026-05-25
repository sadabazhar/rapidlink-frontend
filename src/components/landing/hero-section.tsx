import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Copy,
  Sparkles,
} from 'lucide-react'

import Button from '@/components/ui/button'
import LayoutContainer from '@/components/layout/layout-container'

const HeroSection = () => {
  const [url, setUrl] = useState('')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1600)
  }

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-450 w-750 ..."/>
      </div>
      <LayoutContainer className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Announcement Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--primary)/20 bg-(--primary)/5 px-4 py-1.5 text-xs font-medium text-(--primary) backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />

            <span>Now with real-time click analytics</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-semibold tracking-tight text-(--foreground) sm:text-6xl md:text-7xl">
            Short links.
            <br />

            <span className="bg-linear-to-r from-(--primary) to-(--primary-dark) bg-clip-text text-transparent">
              Sharp insights.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-(--foreground-secondary) sm:text-lg">
            RapidLink turns long URLs into branded short links with
            developer-grade analytics — built for teams that move fast.
          </p>

          {/* URL Shortener */}
          <div className="mx-auto mb-6 flex max-w-3xl flex-col gap-3 rounded-3xl border border-(--border) bg-(--surface) p-3 backdrop-blur-xl sm:flex-row">
            <input
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="Paste your long URL here..."
              className="flex-1 rounded-2xl bg-transparent px-4 py-3 text-sm text-(--foreground) outline-none placeholder:text-(--foreground-muted)"
            />

            <Button
              onClick={handleCopy}
              size="lg"
              className="shrink-0"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied
                </>
              ) : (
                <>
                  Shorten Link
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

          {/* Analytics Preview */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-(--foreground-secondary)">
            <div className="rounded-full border border-(--border) bg-(--surface) px-4 py-2 backdrop-blur-sm">
              <span className="font-mono text-(--primary)">
                rpd.link/product-launch
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="rounded-lg border border-(--border) bg-(--surface) p-2 transition-colors hover:bg-(--surface-hover)"
            >
              <Copy className="h-4 w-4" />
            </button>

            <span>12,847 clicks tracked today</span>
          </div>
        </div>
      </LayoutContainer>
    </section>
  )
}

export default HeroSection