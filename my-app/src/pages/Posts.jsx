import React, {useEffect, useState, useRef  } from 'react';
import '../styles/App.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../components/utils/pages";
import Pagination from "../components/UI/pagination/pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })
    const lastElement = useRef()

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(page);
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post))
    }

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div className='App'>
            <MyButton onClick={() => setModal(true)}>
                Create Post
            </MyButton>
            <br/>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '20px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='quanity of elements on page'
                option={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: 50, name: '50'},
                    {value: -1, name: 'all'},
                ]}
            />
            {postError &&
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 style={{width: '400px'}}>
                        <span style={{color: 'red'}}>Error</span>
                        : `{postError}`</h1>
                </div>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts of JS'/>
            <div ref={lastElement}/>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
            }
            <Pagination
                totalPages={totalPages}
                page={page}
                setPosts={setPosts}
                changePage={changePage}
            />
        </div>
    );
}

export default Posts;
