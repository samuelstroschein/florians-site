import Head from "next/head";
import * as React from "react";
import { useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RiveComponent from "@rive-app/react-canvas";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Grid from "@/layout/Grid";
import SortableItem from "@/layout/SortableItem";
import Item from "@/layout/Item";

export default function Home() {
  const title = "Designer and Developer";
  const imgLoader = ({ src, width, quality }) => {
    return `/${src}?w=${width}&q=${quality || 75}`;
  };
  const highlight = "About";

  const [items, setItems] = useState(
    Array.from({ length: 4 }, (_, i) => (i + 1).toString())
  );
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);
  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);
  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <>
      <Head>
        <title>About Florian | Design With Tech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation title={title} highlight={highlight} />
      <main class="max-md:w-[90%] min-h-[100vh] w-full max-w-6xl pl-[5%] pr-[5%] m-auto bg-white">
        <div class="w-full h-[35vh] pt-5 max-md:h-[200px]">
          <RiveComponent
            src="./animations/florian_animation.riv"
            class="max-w-[500px] h-auto max-h-[300px] object-contain m-auto "
          />
        </div>
        <div class="gap-16 grid grid-cols-2 max-md:grid-cols-1">
          <div>
            <div class="flex gap-8 mb-6 max-lg:flex-col max-md:gap-4">
              <Image
                loader={imgLoader}
                src="./images/florian_student.jpg"
                class="inline-flex object-cover object-top max-h-64 max-md:w-20 max-md:h-20 max-md:rounded-full max-md:ring-1 max-md:ring-gray-300"
                width={200}
                height={100}
              />
              <div>
                <h1 class="text-2xl font-medium mb-3">About me</h1>
                <p class="text-gray-600">
                  <span class="font-bold italic text-black">
                    Nice to meet you!
                  </span>{" "}
                  - My name is Florian and I am currently 22 years old. I am a
                  designer and developer and I love to create beautiful
                  products. Currently I am studying at the Hochschule fuer
                  Gestaltung, also known as just HfG, in Schwaebisch Gmuend,
                  Germany.
                </p>
              </div>
            </div>
            <p class="text-gray-600">
              Beside my desire to work between design and code I love working
              with CSS and creating animations for web and mobile applications.
            </p>
          </div>
          <div class="flex flex-col gap-6">
            <h2 class="font-medium text-lg">Work</h2>
            <div class="flex w-full justify-between">
              <div class="flex gap-2 place-items-center ">
                <Image
                  loader={imgLoader}
                  src="./images/company_metahype.jpg"
                  class="block flex-shrink-0 relative object-contain object-center rounded-full border border-gray-200 p-1"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 class="font-medium text-md">
                    Digital Strategist and Designer
                  </h3>
                  <p class="text-sm text-gray-500">Metahype</p>
                </div>
              </div>
              <p class="text-gray-500">2020 - present</p>
            </div>
            <div class="flex w-full justify-between">
              <div class="flex gap-2 place-items-center ">
                <Image
                  loader={imgLoader}
                  src="./images/company_hfg.jpg"
                  class="block flex-shrink-0 relative object-contain object-center rounded-full border border-gray-200 p-1"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 class="font-medium text-md">Webdesigner and Developer</h3>
                  <p class="text-sm text-gray-500">HfG Schwaebisch Gmuend</p>
                </div>
              </div>
              <p class="text-gray-500">2022</p>
            </div>
            <div class="flex w-full justify-between">
              <div class="flex gap-2 place-items-center ">
                <Image
                  loader={imgLoader}
                  src="./images/company_comondo.jpg"
                  class="block flex-shrink-0 relative object-contain object-center rounded-full border border-gray-200 p-1"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 class="font-medium text-md">
                    Digital Strategist and Designer
                  </h3>
                  <p class="text-sm text-gray-500">Comondo</p>
                </div>
              </div>
              <p class="text-gray-500">2020 - 2021</p>
            </div>
            <div class="flex w-full justify-between">
              <div class="flex gap-2 place-items-center ">
                <Image
                  loader={imgLoader}
                  src="./images/company_videoeditor.jpg"
                  class="block flex-shrink-0 relative object-contain object-center rounded-full border border-gray-200 p-1"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 class="font-medium text-md">
                    Videoeditor and Motion Designer
                  </h3>
                  <p class="text-sm text-gray-500">Freelance</p>
                </div>
              </div>
              <p class="text-gray-500">2015 - 2020</p>
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <h2 class="font-medium text-lg">Side projects</h2>
            <div class="flex w-full justify-between">
              <div class="flex gap-2 place-items-center ">
                <Image
                  loader={imgLoader}
                  src="./images/project_curations.jpg"
                  class="block flex-shrink-0 relative object-contain object-center rounded-full border border-gray-200 p-1"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 class="font-medium text-md">Curations</h3>
                  <p class="text-sm text-gray-500">
                    Website featuring useful curations for designers and
                    developers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="font-medium text-lg">Connect</h2>
            <div class="flex gap-4 max-sm:flex-col">
              <Link
                class="font-medium transition-all text-black hover:opacity-75 border-b-black group"
                href={"#"}
                target="_blank"
              >
                Read.cv
                <Icon.ArrowUpRight
                  size={20}
                  class="inline ml-0.5 relative group-hover:-right-1 group-hover:-top-1.5 right-0 -top-0.5 transition-all"
                />
              </Link>
              <Link
                class="font-medium transition-all text-black hover:opacity-75 border-b-black group"
                href={"#"}
                target="_blank"
              >
                GitHub
                <Icon.ArrowUpRight
                  size={20}
                  class="inline ml-0.5 relative group-hover:-right-1 group-hover:-top-1.5 right-0 -top-0.5 transition-all"
                />
              </Link>
              <Link
                class="font-medium transition-all text-black hover:opacity-75 border-b-black group"
                href={"#"}
                target="_blank"
              >
                LinkedIn
                <Icon.ArrowUpRight
                  size={20}
                  class="inline ml-0.5 relative group-hover:-right-1 group-hover:-top-1.5 right-0 -top-0.5 transition-all"
                />
              </Link>
            </div>
          </div>
        </div>
        <div class="h-32"></div>
        <div class="block">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <SortableContext items={items} strategy={rectSortingStrategy}>
              <Grid columns={3}>
                {items.map((id) => (
                  <SortableItem key={id} id={id} index={items.indexOf(id)} />
                ))}
              </Grid>
            </SortableContext>
            <DragOverlay
              adjustScale
              style={{ transformOrigin: "0 0 ", objectFit: "contain" }}
            >
              {activeId ? <Item id={activeId} isDragging /> : null}
            </DragOverlay>
          </DndContext>
        </div>
        <div class="h-32"></div>
      </main>
      <Footer />
    </>
  );
}
