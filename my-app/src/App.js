import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'b', body: 'c'},
        {id: 2, title: 'a', body: 'd'},
    ]);
    const [filter, setFilter] = useState({sort:'', query:''});

    const sortedPosts = useMemo(() => {
        console.log(filter)
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    },[filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [sortedPosts, filter.query]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post))
    }

    return (
        <div className='App'>
            <div className='header__div'>
                <h1 className='header__p'>PosTable</h1>
            </div>
            <PostForm create={createPost}/>
            <hr style={{margin: '20px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.length !== 0
                ?<PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts of JS'/>
                : <h1
                    style={{color:'teal',
                        textAlign:'center'
                }}
                > Post aren`t find</h1>
            }
        </div>
    );
}

export default App;
