import ChatSidebar from "@/components/chat/ChatSidebar";
import EventsMeetups from "@/components/community/EventsMeetups";
import PostsTabs from "@/components/post/post-tabs/PostTabs";
import PostPage from "@/components/post/PostPage";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Post(){
    return(
        <>
                <Sidebar />
        <PostsTabs />
        <ChatSidebar />
        <PostPage />
        </>
    )
}