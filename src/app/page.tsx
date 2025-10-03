import Hero from "@/components/hero/Hero";
import { fetchHomePage } from "./api/home";
export default async function Home() {
  const data = await fetchHomePage()
  return (
    <Hero {...data}/>
  );
}
