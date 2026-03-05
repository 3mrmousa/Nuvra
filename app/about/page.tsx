

export const metadata = {
  title: "About",
  description: "Nuvra About Page",
}; 


function Page() {
  return (
    <div className="p-4 min-h-screen flex flex-col gap-4 justify-center items-center mt-25 lg:mt-0">
      <div
        className="bg-zinc-900 dark:bg-zinc-100 p-10 rounded-2xl shadow-2xl 
        shadow-zinc-400 dark:shadow-zinc-800 max-w-3xl"
      >
        <h1 className="text-3xl font-bold mb-4 text-white dark:text-black">About Nuvra</h1>

        <p className="text-lg dark:text-gray-700 text-gray-300">
          Nuvra is a weather application that provides accurate and up-to-date
          weather information through a clean and user-friendly interface. It
          helps users stay informed about current and upcoming weather
          conditions with ease.
        </p>

        <p className="text-lg dark:text-gray-700 text-gray-300 mt-4">
          With Nuvra, you can check the current weather, explore hourly and
          daily forecasts, and view detailed data such as temperature, humidity,
          wind speed, and more. It is designed to be simple, fast, and reliable
          for everyday use.
        </p>

        <p className="text-lg dark:text-gray-700 text-gray-300 mt-4">
          This project was built as a practice application to improve skills in
          <span className="font-semibold text-white dark:text-black">
            {" "}
            Next.js
          </span>
          , focusing on server components, API integration, and modern UI
          patterns. Weather data is powered by the
          <span className="font-semibold text-white dark:text-black">
            {" "}
            Open-Meteo API
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default Page;
