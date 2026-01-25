import React, {useEffect, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyHeader from "./components/UI/header/MyHeader";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    },[])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const fetchPosts = async () => {
        setIsPostsLoading(true);
        const response = await PostService.getAll()
        setPosts(response.data);
        setIsPostsLoading(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post))
    }

    return (
        <div className='App'>
            {/*<MyHeader/>*/}
            <MyButton style={{marginTop: '30px'}} onClick = {() => setModal(true)}>
                Create Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '20px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoading
                ? <div style={{display:'flex', justifyContent: 'center'}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts of JS'/>
            }
        </div>
    );
}

export default App;
