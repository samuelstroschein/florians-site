export default onBeforePrerenderStart

import { ProjectContent, RenderedProjects } from "pages/work/types"
import { convertMarkdownToHtml, returnContent } from "../../../markdown/convert"

const rendered = {} as RenderedProjects

async function onBeforePrerenderStart() {
  const projects = await returnContent("archive")
  for (const project of projects) {
    rendered[project.slug] = (await convertMarkdownToHtml(
      project.url
    )) as unknown as ProjectContent
  }

  return [
    {
      url: "/archive",
      pageContext: {
        pageProps: {
          projects: projects,
        },
        documentProps: {
          title: "Archive | Florian - Design Engineer",
          description:
            "In my archive, you will find smaller creations, MVPs, ideas and results from hackathons. Feel free to look through if you are interested.",
          image: "/images/opengraph/og-image-archive.jpg",
        },
      },
    },
    ...projects.map((project) => {
      const url = `/archive/${project.slug}`
      return {
        url,
        pageContext: {
          pageProps: {
            content: rendered[project.slug],
          },
          documentProps: {
            // @ts-ignore
            title: `${project.title} | Florian - Design Engineer`,
            // @ts-ignore
            description: project.description,
            image: `/generated/${project.slug}.jpg`,
          },
        },
      }
    }),
  ]
}
