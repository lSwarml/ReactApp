import React from "react";
// import c from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            my post
            <div>
                New Post
            </div>
            <div>
                <Post message='Helsdfsdl' likeCaunt='3'/>
                <Post message='It my ferst post' likeCaunt='2'/>
            </div>
        </div>

    )
};
export default MyPost;