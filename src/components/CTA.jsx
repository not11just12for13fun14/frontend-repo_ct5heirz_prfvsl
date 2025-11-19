function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_0%_0%,rgba(251,146,60,0.15),transparent),radial-gradient(600px_200px_at_100%_100%,rgba(244,63,94,0.15),transparent)]"></div>
          <div className="relative z-10 grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to take off?</h3>
              <p className="mt-3 text-white/75">Join early and help shape the future of group travel finance.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="Enter your email" className="flex-1 rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
              <button className="rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-white font-semibold">Request access</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
