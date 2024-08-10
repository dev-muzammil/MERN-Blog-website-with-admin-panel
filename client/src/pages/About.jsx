import React from "react";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-6 lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Blog about Coding.
              <strong className="font-extrabold text-emerald-800 sm:block">
                {" "}
                Learn to Code with Us!{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              This is a blog website where i upload blogs about the latest
              update of developers.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center mx-auto px-10 md:px-36 gap-4 text-xl">
        <p>
          Our mission is simple: to empower individuals of all skill levels to
          learn, grow, and excel in the exciting realm of coding. We believe
          that coding is more than just writing code; it's about
          problem-solving, innovation, and building something truly remarkable.
        </p>
        <p>
          We're a diverse group of individuals who share a common love for
          coding. Our team includes experienced developers, aspiring
          programmers, and tech enthusiasts from all walks of life. We're
          committed to creating a welcoming and inclusive space where everyone
          feels encouraged to learn and grow.
        </p>
        <ul className="flex flex-col gap-2 list-disc">
          <h1 className="font-bold">What We Offer:</h1>
          <li>
            In-Depth Guides: Dive deep into specific topics with our detailed
            guides, packed with practical examples and real-world applications.
          </li>
          <li>
            Industry Insights: Stay updated with the latest trends,
            technologies, and best practices through our informative articles
            and interviews.
          </li>
          <li>
            A Supportive Community: Connect with fellow coders, share your
            experiences, and learn from others in our vibrant community.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
