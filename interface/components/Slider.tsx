import Flicking from "@egjs/preact-flicking"
import "@egjs/preact-flicking/dist/flicking.css"
import { JSX } from "preact/jsx-runtime"
import { AutoPlay } from "@egjs/flicking-plugins"
import { useRef, useState } from "preact/hooks"
import { useWindowResize } from "../hooks/useWindowResize"
import Button from "./Button"
import ArrowRight from "~icons/eva/arrow-forward-outline"
import ArrowLeft from "~icons/eva/arrow-back-outline"

export default function Slider(props: {
  autoPlay?: boolean
  buttons?: boolean
  children: JSX.Element[] | Element[]
}) {
  const slider = useRef<Flicking>(null)
  const [panelsNumber, setPanelsNumber] = useState(() =>
    typeof window !== "undefined"
      ? window.innerWidth > 1024
        ? 4
        : window.innerWidth > 640
        ? 2
        : 1
      : 1
  )

  const plugins = []
  if (props.autoPlay) plugins.push(new AutoPlay({ duration: 5000 }))

  useWindowResize(() => {
    setPanelsNumber(
      window.innerWidth > 1024 ? 4 : window.innerWidth > 640 ? 2 : 1
    )
  })

  return (
    <div class="w-full relative md:block flex flex-wrap gap-y-16 gap-x-4">
      <Flicking
        ref={slider}
        hideBeforeInit
        align="next"
        circular={true}
        panelsPerView={panelsNumber}
        moveType="snap"
        preventDefaultOnDrag
        plugins={plugins}
        cameraClass="cursor-grab active:cursor-grabbing"
      >
        {props.children}
      </Flicking>
      <Button
        type="secondary"
        function={() => {
          slider.current?.prev()
        }}
        class="md:absolute z-10 -translate-y-1/2 top-1/2 left-0 md:-left-8 md:shadow-xl shadow-black/5"
      >
        <ArrowLeft />
      </Button>
      <Button
        type="secondary"
        function={() => {
          slider.current?.next()
        }}
        class="md:absolute z-10 -translate-y-1/2 top-1/2 right-0 md:-right-8 md:shadow-xl shadow-black/5"
      >
        <ArrowRight />
      </Button>
    </div>
  )
}

export function PhotoSlider(props: { autoPlay?: boolean; buttons?: boolean }) {
  const slides = [
    {
      src: "/images/avatars/florian_student.webp",
      alt: "Florian Student",
      caption: "Florian Student",
    },
    {
      src: "/images/avatars/florian_student.webp",
      alt: "Florian Student",
      caption: "Florian Student",
    },
    {
      src: "/images/avatars/florian_student.webp",
      alt: "Florian Student",
      caption: "Florian Student",
    },
    {
      src: "/images/avatars/florian_student.webp",
      alt: "Florian Student",
      caption: "Florian Student",
    },
    {
      src: "/images/avatars/florian_student.webp",
      alt: "Florian Student",
      caption: "Florian Student",
    },
    {
      src: "/images/avatars/florian_student.webp",
      alt: "Florian Student",
      caption: "Florian Student",
    },
  ]
  return (
    <Slider autoPlay={props.autoPlay} buttons={props.buttons}>
      {slides.map((slide) => (
        <figure key={slide} class="mr-8">
          <img src={slide.src} alt={slide.alt} />
          <figcaption class="text-sm text-zinc-400 mt-3">
            {slide.caption}
          </figcaption>
        </figure>
      ))}
    </Slider>
  )
}
