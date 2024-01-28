import 'bootstrap/dist/css/bootstrap.css';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import DefaultLayout from "../../layouts/Default";
import Post from '../../components/Post';
import Pagination from '../../components/Pagination';

function HomePage() {

    
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const {state} = useLocation;
    
    /**
     * set the current page
     */
    useEffect(() => { 
        if(state) {
            const page = state;
            setPage(page);
        }
    }, []);

    /**
     * get the current page's posts 
     */
    useEffect(() => {
        getPosts();
    }, [page]);

    /**
     * get the amount of all posts
     */
    useEffect(() => {
        axios.get(import.meta.env.VITE_API + "/total-posts")
            .then(response => {
                if(response && response.data) {
                    const total = response.data;
                   setTotal(total);
                }
            })
    }, []);

    const getPosts = () => {
        axios.get(import.meta.env.VITE_API + "/posts?page=" + page)
        .then(response => {
            if(response && response.data && response.data.data) {
                const posts = response.data.data;
                setPosts(posts);
            }
        });
    }

    const _setPage = (page) => {
        setPage(page);
    }

    const handleDelete = (id) => {
        confirm('Are you sure you want to delete this post?') &&

        axios.delete(import.meta.env.VITE_API + "/posts/" + id)
            .finally(() => {
                getPosts();
            });
    }

    return (
        <>
            <DefaultLayout>
                <h1 className="text-primary">Home</h1>
                <hr />
                <div className='row'>
                    <div className='col-8'>
                        <Pagination page={page} total={total} setPage={_setPage} />
                    </div>
                    <div className='col-4'>
                        <p className='d-flex justify-content-end pe-2'>
                            <Link to={'create-post'}>
                                <FontAwesomeIcon className='text-primary' icon={faCirclePlus} title='Post new?' size='2x' />
                            </Link>
                        </p>
                    </div>
                </div>

                <div className='row'>
                    {posts.map((post, index) => {
                            return (
                                <Post post={post} key={post.id} handleDelete={handleDelete} />
                            )
                        })
                    }
                </div>

            </DefaultLayout>
        </>
    )
}

export default HomePage;