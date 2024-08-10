import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-800 body-font">
        <div className="container mx-auto flex px-5 pt-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Uncover a World of Knowledge, Inspiration, and Connection!
            </h1>
            <p className="mb-8 leading-relaxed font-semibold">
              Embark on a captivating journey of discovery as we explore a
              diverse range of topics, from thought-provoking ideas to practical
              advice. Join our community of curious minds and let's shape the
              future together.
            </p>
            <div className="flex justify-center">
              <Link to="/blogs">
                <Button className="bg-gradient-to-tr from-pink-500 to-emerald-600 hover:bg-gradient-to-l transition-all">
                  Read Blogs
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/heroimage.gif"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroSection;
