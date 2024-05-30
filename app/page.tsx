import { PageComponent } from "@/components/app/page";
import client from "@/tina/__generated__/client";


export default async function HomePage() {

  const result = await client.queries.pages({ relativePath: "home.mdx" })
  return <PageComponent {...result} />

}