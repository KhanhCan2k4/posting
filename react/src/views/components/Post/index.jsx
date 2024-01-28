import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Post({ post, handleDelete }) {

    const titleRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        titleRef.current.innerHTML = post.title.replace(/<\/?[^>]+(>|$)/g, "");
    }, []);

    useEffect(() => {
        contentRef.current.innerHTML = post.content;
    }, []);
    return (
        <>
            <div className='col-lg-4 col-md-6 p-2'>
                <div className="card mx-auto" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h6>#Posted at: <small>{post['created_at']}</small></h6>
                        <h5 ref={titleRef} className="card-title fw-bold"></h5>
                        <p ref={contentRef} className="card-text" style={{ minHeight: '100px' }} ></p>
                        <Link
                            to={"/post"}
                            state={post}
                            className="card-link text-warning">View Post</Link>
                        <Link 
                            to={'/update-post'} 
                            state={post}
                            className="card-link text-info">Update</Link>
                        <Link onClick={() => handleDelete(post.id)} className="card-link text-danger">Delete</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;