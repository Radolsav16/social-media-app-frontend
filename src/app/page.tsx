import Hero from "@/components/hero/Hero";
import Search from "./search/page";
import Post from "./post/page";
import FollowSuggestions from "@/components/search/follow-suggestions/FollowSuggestions";
import SuggestedCommunities from "@/components/hero/suggested-communities/SuggestedCommunities";



export default async function Home() {
  const res = await fetch('http://localhost:3050/api/social-media-app/home',{
    cache:'no-store'
  });
  const data = await res.json();
  return (
    <Hero {...data}/>
    // <Search 
    // <Post />
    // <SuggestedCommunities />
    // <FollowSuggestions />
  );
}
