import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import {
  Globe,
  Link2,
  MousePointerClick,
  TrendingUp,
} from 'lucide-react'

import LayoutContainer from '@/components/layout/layout-container'

const areaData = [
  { day: 'Mon', value: 1240 },
  { day: 'Tue', value: 2100 },
  { day: 'Wed', value: 1890 },
  { day: 'Thu', value: 2780 },
  { day: 'Fri', value: 3490 },
  { day: 'Sat', value: 2390 },
  { day: 'Sun', value: 4200 },
]

const countryData = [
  { country: 'US', value: 4200 },
  { country: 'DE', value: 3100 },
  { country: 'JP', value: 2400 },
  { country: 'BR', value: 1900 },
  { country: 'FR', value: 1500 },
  { country: 'IN', value: 1200 },
]

const stats = [
  {
    label: 'Total clicks',
    value: '284.2K',
    change: '+12.4%',
    icon: MousePointerClick,
  },
  {
    label: 'Active links',
    value: '1,284',
    change: '+8.1%',
    icon: Link2,
  },
  {
    label: 'Unique visitors',
    value: '92.7K',
    change: '+24.3%',
    icon: Globe,
  },
  {
    label: 'Conversion',
    value: '8.42%',
    change: '+1.2%',
    icon: TrendingUp,
  },
]

const topLinks = [
  {
    slug: 'rpd.link/product-launch',
    clicks: 12847,
    ctr: '9.1%',
  },
  {
    slug: 'rpd.link/changelog-q2',
    clicks: 8421,
    ctr: '7.4%',
  },
  {
    slug: 'rpd.link/api-docs-v3',
    clicks: 5912,
    ctr: '6.2%',
  },
  {
    slug: 'rpd.link/blog-edge',
    clicks: 3284,
    ctr: '5.8%',
  },
]

const AnalyticsDashboard = () => {
  return (
    <section
      id="analytics"
      className="relative py-24 sm:py-32"
    >
      <LayoutContainer>
        {/* Section Header */}
        <div className="mb-14 text-center">

          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-(--foreground) sm:text-5xl">
            Every click,
            <span className="bg-linear-to-r from-(--primary) to-(--primary-dark) bg-clip-text text-transparent">
              {' '}
              decoded.
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-(--foreground-secondary) sm:text-lg">
            Real-time analytics with country, device, and
            traffic breakdowns — built for modern teams.
          </p>
        </div>

        {/* Dashboard Wrapper */}
        <div className="rounded-4xl border border-(--border) bg-(--surface) p-4 shadow-[0_30px_120px_-30px_var(--shadow-primary)] backdrop-blur-2xl sm:p-6">
          {/* Stats Grid */}
          <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-(--border) bg-(--surface) p-5 transition-all duration-300 hover:border-(--primary)/30 hover:bg-(--surface-hover)"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary)/10 text-(--primary)">
                    <stat.icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-medium text-(--primary)">
                    {stat.change}
                  </span>
                </div>

                <div className="text-2xl font-semibold tracking-tight text-(--foreground)">
                  {stat.value}
                </div>

                <p className="mt-1 text-sm text-(--foreground-muted)">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Area Chart */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-5 lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-(--foreground)">
                    Clicks over time
                  </h3>

                  <p className="text-xs text-(--foreground-muted)">
                    Last 7 days
                  </p>
                </div>

                <div className="flex rounded-lg border border-(--border) bg-black/10 p-1 text-xs">
                  <button className="rounded-md bg-(--surface-hover) px-3 py-1 text-white">
                    7D
                  </button>

                  <button className="px-3 py-1 text-(--foreground-muted)">
                    30D
                  </button>

                  <button className="px-3 py-1 text-(--foreground-muted)">
                    90D
                  </button>
                </div>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer>
                  <AreaChart
                    data={areaData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: -20,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="clickGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="var(--primary)"
                          stopOpacity={0.45}
                        />

                        <stop
                          offset="100%"
                          stopColor="var(--primary)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      stroke="rgba(255,255,255,0.06)"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="day"
                      stroke="var(--foreground-muted)"
                      tickLine={false}
                      axisLine={false}
                      fontSize={12}
                    />

                    <YAxis
                      stroke="var(--foreground-muted)"
                      tickLine={false}
                      axisLine={false}
                      fontSize={12}
                    />

                    <Tooltip
                      contentStyle={{
                        background: '#111827',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        fontSize: '12px',
                      }}
                    />

                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="var(--primary)"
                      strokeWidth={2.5}
                      fill="url(#clickGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Country Chart */}
            <div className="rounded-2xl border border-(--border) bg-(--surface) p-5">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-(--foreground)">
                  Top countries
                </h3>

                <p className="text-xs text-(--foreground-muted)">
                  By click volume
                </p>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer>
                  <BarChart
                    data={countryData}
                    margin={{
                      top: 10,
                      right: 10,
                      left: -20,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid
                      stroke="rgba(255,255,255,0.06)"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="country"
                      stroke="var(--foreground-muted)"
                      tickLine={false}
                      axisLine={false}
                      fontSize={12}
                    />

                    <YAxis
                      stroke="var(--foreground-muted)"
                      tickLine={false}
                      axisLine={false}
                      fontSize={12}
                    />

                    <Tooltip
                      contentStyle={{
                        background: '#111827',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                        fontSize: '12px',
                      }}
                      cursor={{
                        fill: 'rgba(45,212,191,0.08)',
                      }}
                    />

                    <Bar
                      dataKey="value"
                      fill="var(--primary)"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Top Links */}
          <div className="mt-4 rounded-2xl border border-(--border) bg-(--surface) p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-(--foreground)">
                  Top performing links
                </h3>

                <p className="text-xs text-(--foreground-muted)">
                  Highest traffic links this week
                </p>
              </div>

              <button className="text-xs font-medium text-(--primary) hover:underline">
                View all
              </button>
            </div>

            <div className="divide-y divide-white/5">
              {topLinks.map((link) => (
                <div
                  key={link.slug}
                  className="grid grid-cols-[1fr_auto] gap-4 py-4 sm:grid-cols-[1fr_auto_auto]"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="h-2 w-2 rounded-full bg-(--primary) shadow-[0_0_12px_var(--shadow-primary)]" />

                    <span className="truncate font-mono text-sm text-(--foreground)">
                      {link.slug}
                    </span>
                  </div>

                  <span className="text-sm text-(--foreground-secondary)">
                    {link.clicks.toLocaleString()} clicks
                  </span>

                  <span className="w-fit rounded-md bg-(--primary)/10 px-2 py-1 text-xs font-medium text-(--primary)">
                    {link.ctr}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  )
}

export default AnalyticsDashboard