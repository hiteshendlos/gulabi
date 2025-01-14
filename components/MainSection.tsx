import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FaVideo } from "react-icons/fa";

const MainSection: NextPage = () => {
  return (
    <>
      <div className=" px-2 md:h-[80vh] md:flex md:justify-center md:items-center mt-3 ">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-full h-[206px] md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {"Services".toUpperCase()}
              </h5>
              <p className="hidden md:block text-gray-700 text-base mb-4">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              {/* <p className="text-gray-600 text-xs">Last updated 3 mins ago</p> */}

              <div className=" my-5 flex">
                {/* <TiVideo /> */}

                <button
                  type="button"
                  className=" animate-bounce inline-block px-3 md:px-6 py-2 border-2 border-pink-600 text-pink-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  <span className="flex justify-center items-center">
                    <FaVideo className="mx-2 h-3" /> Videos
                  </span>
                </button>
                <button
                  type="button"
                  className=" ml-5 inline-block px-3 md:px-6 py-2 border-2 border-pink-600 text-pink-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
