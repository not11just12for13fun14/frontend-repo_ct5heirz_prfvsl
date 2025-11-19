import { Shield, SplitSquareHorizontal, Sparkles, Wallet, Globe, BarChart3 } from 'lucide-react'

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition-colors">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 to-rose-500/0 opacity-0 group-hover:opacity-20 transition-opacity"></div>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{desc}</p>
    </div>
  )
}

function FeatureGrid() {
  const features = [
    { icon: SplitSquareHorizontal, title: 'Smart Splits', desc: 'Split flights, stays, and rides fairly with tips, taxes, and fees included.' },
    { icon: Wallet, title: 'One-tap Pay', desc: 'Settle up instantly with integrated cards and wallets.' },
    { icon: Globe, title: 'Global Ready', desc: 'Multi-currency support with transparent FX.' },
    { icon: BarChart3, title: 'Trip Analytics', desc: 'See who owes what and how costs trend over time.' },
    { icon: Shield, title: 'Secure by Design', desc: 'Encrypted, tokenized payments and privacy-first data.' },
    { icon: Sparkles, title: 'Beautiful UX', desc: 'A boarding-pass inspired interface that feels alive.' },
  ]

  return (
    <section id="product" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything your group trip needs</h2>
          <p className="mt-3 text-white/70">Plan, book, and split with zero spreadsheets.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
