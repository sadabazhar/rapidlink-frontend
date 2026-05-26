import LayoutContainer from '@/components/layout/layout-container'

const codeSnippet = `const response = await fetch('/api/v1/links', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer YOUR_API_KEY',
  },
  body: JSON.stringify({
    url: 'https://mywebsite.com/blog/react-guide',
    slug: 'react-guide',
  }),
})

const data = await response.json()

console.log(data.shortUrl)
`

const apiFeatures = [
  'Simple REST API',
  'Create links programmatically',
  'Track analytics in dashboard',
]

const ApiShowcaseSection = () => {
  return (
    <section
      id="api"
      className="relative py-24 sm:py-32"
    >

      <LayoutContainer className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>

            {/* Heading */}
            <h2 className="mb-5 text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl">
              Simple API.
              <span className="bg-linear-to-r from-(--primary) to-(--primary-dark) bg-clip-text text-transparent">
                {' '}
                Easy integration.
              </span>
            </h2>

            {/* Description */}
            <p className="mb-8 max-w-xl text-base leading-relaxed text-(--foreground-secondary) sm:text-lg">
              Create short links directly from your apps using
              a clean REST API built for developers.
            </p>

            {/* Features */}
            <ul className="space-y-4">
              {apiFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-(--foreground-secondary)"
                >
                  <div className="h-2 w-2 rounded-full bg-(--primary) shadow-[0_0_12px_var(--shadow-primary)]" />

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Block */}
          <div className="overflow-hidden rounded-[28px] border border-(--border) bg-(--surface) shadow-[0_20px_80px_-20px_var(--shadow-primary)] backdrop-blur-2xl">
            {/* Top Bar */}
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400/80" />

              <div className="h-3 w-3 rounded-full bg-yellow-400/80" />

              <div className="h-3 w-3 rounded-full bg-green-400/80" />

              <span className="ml-3 font-mono text-xs text-(--foreground-muted)">
                create-link.ts
              </span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto p-6">
              <pre className="font-mono text-[13px] leading-7 text-(--foreground)">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  )
}

export default ApiShowcaseSection