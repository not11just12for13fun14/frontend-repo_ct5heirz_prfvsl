import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white/80 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Interactive boarding pass demo
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight text-white">
            Travel, split, and save — all in one sleek flow
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Turn any trip into a shared experience: plan together, track costs, and pay with one tap. Designed for modern explorers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-3 text-white font-semibold shadow-lg shadow-orange-500/20">
              Get started free
            </a>
            <a href="#product" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10">
              See how it works
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
    </section>
  )
}

export default Hero
