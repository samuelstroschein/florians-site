import { JSX } from "preact/jsx-runtime"
import { navigate } from "vike/client/router"
import Chevron from "~icons/eva/arrow-ios-forward-outline"

export default function Button(props: {
  style: "primary" | "secondary" | "text"
  rounded?: boolean
  link: string
  children: string | Element
  icon?: JSX.Element
  chevron?: boolean
  class?: string
}) {
  return (
    <button
      onClick={() => {
        navigate(props.link)
      }}
      class={
        "flex items-center gap-2 " +
          props.class +
          " " +
          (props.style !== "text" &&
            "font-semibold rounded-lg px-5 py-2.5 transition-all duration-200 border " +
              (props.style === "primary"
                ? "text-white bg-black hover:bg-zinc-800 border-zinc-800 hover:border-zinc-600"
                : "text-black bg-zinc-50 hover:bg-white hover:text-zinc-800 border-zinc-200")) ||
        "text-zinc-800 hover:underline underline-offset-2 font-semibold"
      }
      style={{
        borderRadius: props.rounded ? 1000 : "",
      }}
    >
      {props.icon}
      {props.children}
      {props.chevron && <Chevron />}
    </button>
  )
}

export function ButtonWrapper(props: {
  children: JSX.ElementChildrenAttribute | JSX.Element[]
}) {
  return <div class="flex gap-4">{props.children}</div>
}
