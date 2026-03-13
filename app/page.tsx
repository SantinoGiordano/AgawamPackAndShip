import Image from "next/image";


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

          <h2 className="text-6xl font-semibold text-amber-700 mt-2">
            Pack & Ship
          </h2>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <Image
            src="/frontOfStore.jpg"
            alt="Front of Store"
            className="rounded-xl shadow-lg"
            width={420}
            height={420}
            />
        </div>

      </div>
    </section>
  </> 
    
  );
}