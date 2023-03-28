const ModernFeatures = () => {
  return (
    <section className="relative mt-48">
      <div className="relative">
        <Background />
      </div>
    </section>
  )
}

const Background = () => {
  return (
    <div className="absolute inset-x-0 top-40">
      <div className="absolute inset-x-0 top-0 block h-[37.5rem] bg-gradient-to-b from-[#0c1120] " />
      <div
        className="absolute  inset-x-0 top-0 bg-top bg-no-repeat"
        style={{
          backgroundImage: 'url(/0.png)',
          backgroundSize: '125.5rem 100%',
          height: '28.8125rem',
        }}
      />
      <div className="bg-grid-slate-900/[0.04] bg-grid-slate-100/[0.03] absolute inset-x-0 top-0 h-[37.5rem] border-t border-slate-100/5 [mask-image:linear-gradient(0deg,transparent,black)] " />
    </div>
  )
}

export default ModernFeatures
