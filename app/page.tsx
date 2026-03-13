import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-br from-indigo-100 via-sky-100 to-blue-200 py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-300 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber-300 rounded-full filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-8 gap-10 relative z-10">
          {/* Left Text with decorative underline */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600 mb-2">
              Agawam
            </h1>

            <div className="relative inline-block">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-700 mt-2 relative">
                Pack & Ship
                <span className="absolute -bottom-3 left-0 w-24 h-1 bg-amber-500 rounded-full md:mx-0 mx-auto md:left-0 right-0 md:right-auto"></span>
              </h2>
            </div>

            <p className="mt-8 text-lg text-gray-700 max-w-md">
              Your trusted local shipping partner since 1995
            </p>
          </div>

          {/* Right Image with decorative frame */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-amber-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative">
              <Image
                src="/frontOfStore.jpg"
                alt="Front of Store"
                className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-md transform group-hover:scale-[1.02] transition duration-300"
                width={420}
                height={420}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Serving your Shipping and Business Needs
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="group relative p-8 rounded-2xl shadow-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
              {/* Fill overlay - starts from bottom left, expands to top right */}
              <div className="absolute inset-0 bg-purple-600 translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

              {/* Content (all with relative z-index to stay above overlay) */}
              <div className="relative z-10 transition-all duration-500 ease-in-out">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors duration-500">
                  <svg
                    className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-500">
                  Phone
                </h3>
                <a
                  href="tel:14137891023"
                  className="text-xl text-blue-600 hover:text-blue-700 font-medium hover:underline transition-all duration-500 group-hover:text-white"
                >
                  (413) 789-1023
                </a>
                <p className="mt-3 text-gray-500 group-hover:text-gray-200 transition-colors duration-500">
                  Fax: (413) 789-1549
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative p-8 rounded-2xl shadow-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
              {/* Fill overlay - starts from bottom left, expands to top right */}
              <div className="absolute inset-0 bg-purple-600 translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

              <div className="relative z-10 transition-all duration-500 ease-in-out">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors duration-500">
                  <svg
                    className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-500">
                  Email
                </h3>
                <a
                  href="mailto:info@agawampackandship.com"
                  className="text-lg text-blue-600 hover:text-blue-700 hover:underline break-words transition-all duration-500 group-hover:text-white"
                >
                  info@agawampackandship.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="group relative p-8 rounded-2xl shadow-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
              {/* Fill overlay - starts from bottom left, expands to top right */}
              <div className="absolute inset-0 bg-purple-600 translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

              <div className="relative z-10 transition-all duration-500 ease-in-out">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors duration-500">
                  <svg
                    className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-white transition-colors duration-500">
                  Address
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed group-hover:text-white transition-colors duration-500">
                  417 Springfield Street
                  <br />
                  Agawam, MA 01001-1513
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Us
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Visit our store for all your shipping and packing needs
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=417+Springfield+Street+Agawam+MA+01001&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              className="w-full hover:opacity-95 transition-opacity"
              title="Store Location Map"
            ></iframe>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps?q=417+Springfield+Street+Agawam+MA+01001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 font-medium text-lg group"
            >
              <span>Get Directions</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
