export default function Hero() {
  return (

   <>
    <section className="w-full bg-sky-200 py-16">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8">
        
        {/* Left Text */}
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-purple-800">
            Agawam
          </h1>

          <h1 className="text-3xl font-semibold text-amber-700 mt-2">
            Pack and Ship
          </h1>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src="/frontOfStore.jpg"
            alt="Front of Store"
            className="w-[420px] rounded-xl shadow-lg"
            />
        </div>

      </div>
    </section>
  </> 
    
  );
}