import React from "react";
import c from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import Profileinfo from "./ProfileInfo/Profileinfo";

const Profile = (props) => {


    return (
        <div className={c.content}>
            <Profileinfo/>
            <MyPost postData={props.state.postData}/>
        </div>
    )
};
export default Profile;