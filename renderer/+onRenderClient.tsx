// https://vike.com/onRenderClient
export default onRenderClient

import { hydrate, render } from "preact"
import type { PageContext } from "./types"
import "../design-system/global.css"
import PageLayout from "../interface/layouts/PageLayout"

async function onRenderClient(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const page = (
    <PageLayout pageContext={pageContext}>
      {/* @ts-ignore */}
      <Page {...pageProps} />
    </PageLayout>
  )
  const container = document.querySelector("body")

  if (pageContext.isHydration) {
    hydrate(page, container as Element)
  } else {
    render(page, container as Element)
  }
  document.title = getPageTitle(pageContext)
}

function getPageTitle(pageContext: PageContext) {
  const title =
    (pageContext.documentProps || {}).title ||
    (pageContext.config || {}).title ||
    "Florian - Design Engineer"
  return title
}
