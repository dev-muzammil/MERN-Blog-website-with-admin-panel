import React from "react";

const HeroStats = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-6 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                100+
              </h2>
              <p className="leading-relaxed">Blogs</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K+
              </h2>
              <p className="leading-relaxed">Daily Readers</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                3.5k+
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                4
              </h2>
              <p className="leading-relaxed">Blogs per Day</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroStats;
