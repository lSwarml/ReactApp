import React from "react";
// import c from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
    let NewPost = React.createRef();
    let addPost = () => {
        let text = NewPost.current.value;
        alert(text)
    };

    let post = props.postData.map(d => <Post message={d.message} likeCaunt={d.likeCaunter}/>);

    return (
        <div>
            <h3>My post</h3>
            <div>
                <textarea ref={NewPost}/>
            </div>
            <div>
                <button onClick={addPost}>New Post</button>
            </div>
            <div>
                {post}
            </div>
        </div>

    )
};
export default MyPost;