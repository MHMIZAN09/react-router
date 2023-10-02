import { useLoaderData } from "react-router-dom";


const PostDetail = () => {
    const post =useLoaderData();
    const {title,body}=post;
    return (
        <div>
            <h3>Post details about:{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;