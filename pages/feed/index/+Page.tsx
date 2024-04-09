import "#design-system/feed.css"
import { Post, PostContent } from "../types"
import * as m from "#lang/paraglide/messages"
import { Share } from "#design-system/Icons"
import { Edit as Writing, Sports } from "#design-system/Icons"
import Picker from "#components/Picker"
import { useState } from "preact/hooks"
import Markdown from "#markdown/Markdown"
import Button from "#components/Button"

export default function Page({
  posts,
  content,
}: {
  posts: Post[]
  content: PostContent
}) {
  const [copyLabel, setCopyLabel] = useState("Copy link")
  posts.sort((a, b) => {
    const aDate = new Date(
      Number(a.date.split("/")[2]),
      Number(a.date.split("/")[1]) - 1,
      Number(a.date.split("/")[0])
    )
    const bDate = new Date(
      Number(b.date.split("/")[2]),
      Number(b.date.split("/")[1]) - 1,
      Number(b.date.split("/")[0])
    )
    return bDate.getTime() - aDate.getTime()
  })
  return (
    <div class="w-full">
      <section class="w-full flex gap-4 flex-col lg:items-start lg:flex-row py-4 md:mb-8">
        <div class="lg:w-1/3 mb-4 md:mb-0 w-full flex flex-col-reverse xs:flex-row justify-between gap-4">
          <h1 class="text-2xl line-clamp-3 text-neutral-400 selection:bg-blue-50 selection:text-blue-300 dark:text-neutral-500 dark:selection:bg-blue-950 dark:selection:text-blue-500 font-semibold leading-snug transition-colors group hover:text-neutral-400">
            Latest Posts
          </h1>
        </div>
      </section>
      <section>
        {posts.map((post: any) => {
          const date = new Date(
            Number(post.date.split("/")[2]),
            Number(post.date.split("/")[1]) - 1,
            Number(post.date.split("/")[0])
          )
          return (
            <div class="mb-24 flex flex-col lg:flex-row w-full">
              <div class="lg:max-w-[calc((100%-432px)/2)] lg:w-full items-center gap-1 text-neutral-400 dark:text-neutral-500 text-sm mb-2 md:0 pr-8">
                <p>
                  {date.toLocaleDateString("en-US", { weekday: "long" })} –{" "}
                  {date.toLocaleDateString("en-US", {
                    month: "long",
                  })}{" "}
                  {date.getDate()}, {date.getFullYear()}
                </p>
              </div>
              <div class="lg:max-w-nav w-full lg:mx-auto">
                <div class="relative">
                  <Markdown
                    class="post line-clamp-5"
                    content={content[post.slug]}
                  />
                  <div class="absolute bottom-0 w-full z-10 pointer-events-none bg-gradient-to-b from-transparent to-light-neutral h-1/5 dark:to-black" />
                </div>
                <div class="flex items-center justify-between max-w-nav mx-auto gap-2 mt-8 w-full">
                  <Button type="text" link={post.url}>
                    Read more
                  </Button>
                </div>
              </div>
              <div class="lg:max-w-[calc((100%-432px)/2)] lg:w-full lg:order-last order-first lg:ml-0 ml-auto lg:pl-4 relative lg:bottom-0 -bottom-6">
                <Picker
                  options={[
                    {
                      label: copyLabel,
                      function: () => {
                        navigator.clipboard.writeText(
                          "https://floriankiem.com" + post.url
                        )
                        setCopyLabel("Copied!")
                        setTimeout(() => {
                          setCopyLabel("Copy link")
                        }, 1000)
                      },
                    },
                    {
                      label: "Share on X",
                      link: `https://x.com/intent/tweet?text=${post.title} from Florian&url=https://floriankiem.com${post.url}`,
                    },
                  ]}
                  position="bottom"
                  align="left"
                >
                  <Share size={24} />
                </Picker>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
