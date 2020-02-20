import React from "react";
import c from "./Post.module.css";
const Post = (props) =>  {
    return (
        <div>
            {props.message}
            <div>
                <span>like </span>{props.likeCaunt}
            </div>
        </div>
    )
};
export default Post;