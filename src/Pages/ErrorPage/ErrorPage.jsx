import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const errorMessage = useRouteError()
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, This Page Was  {errorMessage.statusText || errorMessage.message}.
          </p>
          <p className="mt-4 mb-8 ">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to={'/'}
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#59C6D2] rounded-lg shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#59C6D2] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#59C6D2] transition-all duration-300 transform group-hover:translate-x-full ease">
            Back to homepage
            </span>
            <span className="relative invisible">Back to homepage</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
