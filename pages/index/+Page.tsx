import { PageContextCustom } from "../../renderer/types"
import { useIsVisible } from "#hooks/useIsVisible"
import { useEffect, useRef } from "preact/hooks"
import Button, { ButtonWrapper } from "#components/Button"
import Contact from "#sections/Contact"
import Letters, { Letter } from "#sections/Letters"
import Work from "#sections/Work"

export default function Page({
  projects,
  letters,
}: {
  projects: any[]
  letters: Letter[]
}) {
  const { work, workStroke, workTitle } = {
    work: useRef<HTMLDivElement>(null),
    workStroke: useRef<HTMLDivElement>(null),
    workTitle: useRef<HTMLHeadingElement>(null),
  }

  const workVisible = useIsVisible(work)

  useEffect(() => {
    if (workStroke.current && workTitle.current) {
      if (workVisible) {
        setTimeout(() => {
          // @ts-ignore
          workStroke.current.style.width = "0%"
          // @ts-ignore
          workTitle.current.style.color = "black"
        }, 100)
      }
    }
  }, [workVisible, workStroke, workTitle])

  return (
    <div class="w-full">
      <header class="flex items-center justify-start md:gap-24 gap-16 max-lg:pb-32 min-h-screen w-full lg:justify-between lg:flex-row flex-col-reverse">
        <div class="lg:h-2/6 h-2/5 max-lg:w-full max-lg:flex mb-40">
          <div class="cursor-text max-w-2xl">
            <h1 class="text-4xl font-semibold leading-snug pointer-events-none transition-colors group hover:text-zinc-400 mb-10">
              <span class="group-hover:underline text-zinc-400 underline-offset-4 selection:bg-blue-50 selection:text-blue-300">
                Florian.
              </span>{" "}
              A designer and developer building digital products.
            </h1>
            <ButtonWrapper>
              <Button
                type="primary"
                function={() => {
                  typeof window !== undefined &&
                    scrollTo({
                      top: work.current!.offsetTop - 24,
                      behavior: "smooth",
                    })
                }}
              >
                Work
              </Button>
              <Button type="secondary" link="/about">
                About
              </Button>
            </ButtonWrapper>
          </div>
        </div>
      </header>
      <section class="w-full scroll-mt-24 mb-24" ref={work} id="work">
        <Work
          projects={projects}
          workStroke={workStroke}
          workTitle={workTitle}
        />
      </section>
      <section class="w-full mb-56">
        <Contact />
      </section>
      <section class="w-full">
        <Letters letters={letters} />
      </section>
    </div>
  )
}
