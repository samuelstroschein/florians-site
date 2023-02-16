import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import * as Icon from "react-feather";
import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import useEmblaCarousel from "embla-carousel-react";

export default function Boost() {
  const [title, setTitle] = useState("Boost");
  const [highlight, setHighlight] = useState("Projects");
  const [video, setVideo] = useState(false);
  const imgLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollBack = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  return (
    <>
      <Head>
        <title>About Florian | Design With Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation title={title} highlight={highlight} />
      <main class="max-md:w-[90%] min-h-[100vh] w-full max-w-7xl pl-[10%] pr-[10%] m-auto bg-white">
        <div class="flex flex-col items-left justify-left h-full pt-32 max-md:pt-16">
          <h1 class="text-4xl font-bold text-left mb-2">Boost</h1>
          <h2 class="text-2xl font-medium text-left text-gray-500 mb-5">
            Nutrition Application & Hardware device
          </h2>
          <div class="mb-10 flex gap-4 place-items-center">
            <p class="text-xl font-medium">Collaborators:</p>
            <Link
              href={"https://www.antonstallboerger.com/"}
              target="_blank"
              class="group relative transition-all"
            >
              <div class="hidden absolute group-hover:flex justify-center pb-1 pt-1 pl-3 pr-3 left-[50%] translate-x-[-50%] group-hover:bottom-[125%] bg-black text-white rounded-full w-max text-sm">
                <span class="z-10 relative">Anton Stallbörger</span>
                <div class="w-3 h-3 absolute -bottom-1 bg-black rotate-45"></div>
              </div>
              <Image
                loader={imgLoader}
                src="./images/collaborator_anton_stallboerger.jpg"
                class="inline-flex ring-1 ring-gray-300 object-cover object-center max-h-128 rounded-full"
                width={48}
                height={48}
              />
            </Link>
          </div>
          <Image
            loader={imgLoader}
            src="./images/banner-boost.jpg"
            class="inline-flex object-cover object-center max-h-128 mb-16"
            width={1200}
            height={500}
          />
          <p class="text-gray-700 md:max-w-[80%] text-lg mb-32">
            Boost is a prototype of an innovative digital product and app
            designed and developed with Ionic React, NodeJS Express, and Prisma.
            The product seamlessly integrates with the app, allowing users to
            track their daily nutrient intake and receive personalized
            recommendations based on factors such as weather and step count. As
            a digital product designer, I had the opportunity to work on Boost's
            prototype and develop its design, ensuring a seamless user
            experience.
          </p>
          <div class="relative md:min-h-[400px] max-md:h-[400px]">
            <div class="absolute w-[100vw] translate-x-[-50%] left-[50%] cursor-grab">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <Image
                      loader={imgLoader}
                      src="./images/boost_app_in_hand.webp"
                      class="inline-flex object-cover object-center h-[400px] w-full"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="embla__slide">
                    <Image
                      loader={imgLoader}
                      src="./images/boost_application.webp"
                      class="inline-flex object-cover object-center h-[400px] w-full"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="embla__slide">
                    <Image
                      loader={imgLoader}
                      src="./images/boost_detail.webp"
                      class="inline-flex object-cover object-center h-[400px] w-full"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="embla__slide">
                    <Image
                      loader={imgLoader}
                      src="./images/boost_full_device.webp"
                      class="inline-flex object-cover object-center h-[400px] w-full"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="embla__slide">
                    <Image
                      loader={imgLoader}
                      src="./images/boost_in_use.webp"
                      class="inline-flex object-cover object-center h-[400px] w-full"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-4 mt-8 w-full justify-between">
            <div></div>
            <div class="flex gap-4">
              <Icon.ArrowLeft
                size={40}
                onClick={scrollBack}
                class="p-2 bg-[#1480EB] text-white rounded-full cursor-pointer hover:bg-[#2795FD] transition-all"
              />
              <Icon.ArrowRight
                size={40}
                onClick={scrollNext}
                class="p-2 bg-[#1480EB] text-white rounded-full cursor-pointer hover:bg-[#2795FD] transition-all"
              />
            </div>
          </div>
          <div class="h-32"></div>
          <div class="relative">
            <h2 class="text-2xl font-medium text-left mb-2 xl:sticky top-24 max-xl:mb-12 left-0">
              The Process
            </h2>
            <div class="w-full flex justify-end">
              <div class="flex flex-col xl:max-w-3xl">
                <Image
                  loader={imgLoader}
                  src="./images/boost_research.webp"
                  class="inline-flex object-cover object-center max-h-96 mb-8"
                  width={800}
                  height={384}
                />
                <h3 class="text-xl font-medium text-left mb-2">Research</h3>
                <p class="text-gray-700 text-base mb-10">
                  First of all, we had to make a survey to find out what people
                  thought about the current state of the nutrition industry. We
                  also had the intention of finding out what people are taking
                  as supplements and in what form. Our survey was made with the
                  help of Airtable so we could easily analyze the data
                  afterwards. In our research we found out that people are
                  taking supplements in the form of pills, powders, and liquids,
                  but when they could choose, they would prefer to take them in
                  the form of a drink or powder because it is more convenient.
                </p>
                <div class="h-16"></div>
                <Image
                  loader={imgLoader}
                  src="./images/boost_vertical_prototype.webp"
                  class="inline-flex object-cover object-center max-h-96 mb-8"
                  width={800}
                  height={384}
                />
                <h3 class="text-xl font-medium text-left mb-2">
                  Vertical Prototyping
                </h3>
                <p class="text-gray-700 text-base mb-10">
                  In the vertical prototyping phase, we had to create a hardware
                  prototype that is close to the final prototype. The goal was
                  to test the hardware and see if it works as intended. We
                  started by testing different motors and found out that the
                  Nema 17 stepper motor was the best option for our prototype.
                  We also had to send and receive data from a quickly made
                  Frontend to the Backend. We used the Arduino IDE to program an
                  ESP32 and used a NodeJS Express server to receive the data. We
                  also made a quick Frontend to send the data to the Backend.
                  Our tech stack for the project was made clear, we were going
                  to use Ionic React for the Frontend, NodeJS Express for the
                  Backend, and Prisma for the database.
                </p>
                <div class="h-16"></div>
                <Image
                  loader={imgLoader}
                  src="./images/boost_app.webp"
                  class="inline-flex object-cover object-center max-h-96 mb-8"
                  width={800}
                  height={384}
                />
                <h3 class="text-xl font-medium text-left mb-2">Frontend</h3>
                <p class="text-gray-700 text-base mb-10">
                  When researching and discussing our Frontend, we came to the
                  conclusion that it would be best, if we develope a application
                  that is completely usable without having to connect to a
                  device. This way, we could test the application without having
                  to make a hardware prototype first. We started by building the
                  whole application in Figma as a fully functional prototype. We
                  then started building the application in Ionic React from
                  scratch. At this time, we also already set up the Backend and
                  the database. We used Prisma to generate the database models
                  and used Planetscale for its hosting. We used Render.com to
                  host the Backend. We have connected the application with Apple
                  HealthKit and OpenWeather API to get the user's location and
                  weather data for calculating the user's daily vitamin intake.
                </p>
                <div class="h-16"></div>
                <Image
                  loader={imgLoader}
                  src="./images/boost_device.webp"
                  class="inline-flex object-cover object-center max-h-96 mb-8"
                  width={800}
                  height={384}
                />
                <h3 class="text-xl font-medium text-left mb-2">
                  Hardware device
                </h3>
                <p class="text-gray-700 text-base mb-10">
                  In our hardware, we incorporate a total of seven stepper
                  motors, along with a selection of sensors, a circular display,
                  and two ESP32 controllers. Our system is designed to
                  efficiently transmit and receive data via HTTP requests,
                  utilizing a range of libraries to ensure seamless control of
                  all components. By opting for HTTP requests, we prioritize
                  reliability in our product design and aim to offer a highly
                  realistic user experience.
                </p>
              </div>
            </div>
          </div>
          <div class="h-32"></div>
          <h2 class="text-2xl font-medium text-left mb-6 left-0">
            Video documentation
          </h2>
          <div class="w-full">
            {!video && (
              <div class="w-full h-full flex justify-center place-items-center">
                <Image
                  loader={imgLoader}
                  src="./images/boost_device.webp"
                  class="w-full h-full rounded-2xl aspect-video object-cover"
                  width={1920}
                  height={1080}
                />
                <button
                  onClick={() => setVideo(true)}
                  class="absolute z-10 bg-white bg-opacity-0 ring-1 ring-gray-300 ring-opacity-20 text-white font-medium pt-4 pb-4 pl-6 pr-6 rounded-md backdrop-blur-xl transition-all hover:ring-opacity-40 hover:bg-opacity-10"
                >
                  Play Video
                </button>
              </div>
            )}
            {video && (
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/DTpulxnIuxg?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                class="min-h-96 rounded-2xl aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )}
          </div>
          <div class="h-32"></div>
          <div class="flex w-full justify-between p-8 bg-gray-100 rounded-lg place-items-center">
            <h2 class="text-2xl font-medium">
              Project links
            </h2>
            <div class="flex gap-4">
              <Link
                class="font-medium transition-all text-black hover:opacity-75 border-b-2 border-b-black"
                href={"https://boost-three.vercel.app/"}
                target="_blank"
              >
                Landingpage
              </Link>
              <Link
                class="font-medium transition-all text-black hover:opacity-75 border-b-2 border-b-black"
                href={"https://ausstellung.hfg-gmuend.de/w-2223/projekte/boost/studiengang:dp"}
                target="_blank"
              >
                University Exhibition
              </Link>
            </div>
          </div>
          <div class="h-96"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
