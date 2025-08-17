export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-screen">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" className="absolute inset-0 object-cover object-right md:object-center" />
        <div aria-hidden="true" className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
          <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="aspect-1097/845 w-274.25 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div aria-hidden="true" className="absolute -top-52 left-1/2 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
          <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="aspect-1097/845 w-274.25 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Drive Smarter, Spend Less</h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">Calculate your fuel costs with precision using Google Maps integration, real-time fuel prices, and vehicle efficiency data. Plan your trips smarter and save money on every journey.</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">Start Your Trip <span aria-hidden="true">&rarr;</span></a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">View Fuel Prices <span aria-hidden="true">&rarr;</span></a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">Vehicle Database <span aria-hidden="true">&rarr;</span></a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-200">How It Works <span aria-hidden="true">&rarr;</span></a>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Cities covered</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">500+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Fuel stations</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">10,000+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Vehicles supported</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">1,000+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Accuracy rate</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">95%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
