'use client'


import { PagesQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"


export function PageComponent(props: {
    data: PagesQuery
    variables: {
        relativePath: string
    }
    query: string
}) {
    const { data } = useTina(props)

    const title = data.pages.title
    const content = data.pages.body

    return (
        <article>
            <h1>{title}</h1>
            <section>
                <TinaMarkdown content={content} />
            </section>
        </article>
    )
}