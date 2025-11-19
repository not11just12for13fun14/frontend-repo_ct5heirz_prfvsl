function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free. Scale when you need the extras.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Free */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-white font-semibold">Free</div>
            <div className="mt-2 text-4xl font-black text-white">$0</div>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>• Trip boards</li>
              <li>• Basic splits</li>
              <li>• Export to CSV</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10">Get started</a>
          </div>

          {/* Plus */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-rose-500/10 p-6 ring-2 ring-orange-500/40">
            <div className="text-white font-semibold">Plus</div>
            <div className="mt-2 text-4xl font-black text-white">$8<span className="text-base font-semibold text-white/70">/mo</span></div>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>• Smart splits</li>
              <li>• Multi-currency</li>
              <li>• Priority support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-white font-semibold shadow-lg shadow-orange-500/20">Upgrade</a>
          </div>

          {/* Team */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="text-white font-semibold">Team</div>
            <div className="mt-2 text-4xl font-black text-white">$19<span className="text-base font-semibold text-white/70">/mo</span></div>
            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li>• Shared wallets</li>
              <li>• Expense approvals</li>
              <li>• Advanced analytics</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
