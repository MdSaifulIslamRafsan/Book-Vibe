import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[#1313130D] rounded-2xl my-12">
      <div className="container  flex flex-col justify-center p-2 lg:p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-between">
        <div className="flex space-y-16 flex-col justify-center p-2 lg:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold leading-none sm:text-6xl">
            Books to freshen up your bookshelf
          </h1>

          <div>
            <Link to={'/listedBook'}
              
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
              <span className="relative">View The List</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.ibb.co/vwbV2hq/pngwing-1-1.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
