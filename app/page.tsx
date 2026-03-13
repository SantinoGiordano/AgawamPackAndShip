import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full bg-gradient-to-r from-sky-200 to-blue-300 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-8 gap-10">
          {/* Left Text */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-800">
              Agawam
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-amber-700 mt-2">
              Pack & Ship
            </h2>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <Image
              src="/frontOfStore.jpg"
              alt="Front of Store"
              className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md"
              width={420}
              height={420}
            />
          </div>
        </div>
      </section>
      <div className="w-screen overflow-hidden leading-none">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.29,22,104.91,29,158,17C230.7,50.5,284,15,339,7.6c54.7-7.4,108.7,12.6,162,29.5C555,54,609,68,663,63.5c54-4.5,108-27.5,162-41.7C879,7.6,933,7.6,987,20.5c54,12.9,108,38.9,162,38.9V0Z"
            fill="#bfdbfe"
          ></path>
        </svg>
      </div>
      {/* CONTACT SECTION */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10 md:mb-12">
            Serving your Shipping and Business Needs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
            {/* Phone */}
            <div className="p-6 rounded-xl shadow-md bg-gray-50">
              <h3 className="text-lg md:text-xl font-semibold mb-3">Phone</h3>
              <p>
                <a
                  href="tel:14137891023"
                  className="text-blue-600 hover:underline"
                >
                  (413) 789-1023
                </a>
              </p>
              <p className="mt-2 text-gray-600">Fax: (413) 789-1549</p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-xl shadow-md bg-gray-50">
              <h3 className="text-lg md:text-xl font-semibold mb-3">Email</h3>
              <a
                href="mailto:info@agawampackandship.com"
                className="text-blue-600 hover:underline break-words"
              >
                info@agawampackandship.com
              </a>
            </div>

            {/* Address */}
            <div className="p-6 rounded-xl shadow-md bg-gray-50">
              <h3 className="text-lg md:text-xl font-semibold mb-3">Address</h3>
              <p>
                417 Springfield Street <br />
                Agawam, MA 01001-1513
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Find Us
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-lg border">
            <iframe
              src="https://www.google.com/maps?q=417+Springfield+Street+Agawam+MA+01001&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps?q=417+Springfield+Street+Agawam+MA+01001"
              target="_blank"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
