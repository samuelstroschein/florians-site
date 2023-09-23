export default onBeforeRender

import type { PageContextBuiltInServer } from "vite-plugin-ssr/types"
import { render } from "vite-plugin-ssr/abort"
import convertMarkdownToHtml from "../../../markdown/convert"

async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  const { slug } = pageContext.routeParams
  const content = await convertMarkdownToHtml(pageContext.urlPathname).then(
    (html) => {
      return html
    }
  )

  if (!content) {
    throw render(404, `Unknown name: ${slug}`)
  }

  const pageProps = {
    content: content,
  }
  return {
    pageContext: {
      pageProps,
    },
  }
}
