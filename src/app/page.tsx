import Hero from "@/components/hero/Hero";
import { fetchHomePage } from "./api/home";
export const dynamic = 'force-dynamic'
export default async function Home() {
  const data = await fetchHomePage()
  return (
    <Hero {...data}/>
  );
}
