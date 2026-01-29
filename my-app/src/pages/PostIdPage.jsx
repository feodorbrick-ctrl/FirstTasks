import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () =>{
        const response = await PostService.getById(params.id);
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () =>{
        const response = await PostService.getCommentById(params.id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div style={{margin: "0 20px"}}>
            <h1>you navigate page of post from ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
            }
            <h1>comments</h1>
            {isComLoading
                ? <Loader />
                : <div>{comments.map(comm =>
                    <div style={{marginTop: "20px", border: "3px solid teal", padding: "20px"}}>
                        <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur.png" width='30px' height='30px' alt="user:"/>
                        <br/>
                        <a href='/'>{comm.email}</a>
                        <div>{comm.body}</div>
                    </div>
                )}</div>
            }
        </div>
    );
};

export default PostIdPage;