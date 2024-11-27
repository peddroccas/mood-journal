export default function Home() {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl">The best Journal app, period.</h1>
        <p className="text-2xl text-white/60">
          This is the best app for trackin your mood through out your life. All
          you have to do is be honest.
        </p>
        <div>
          <button>get started</button>
        </div>
      </div>
    </div>
  )
}
