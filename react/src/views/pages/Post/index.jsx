import { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link , useLocation} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";

import DefaultLayout from "../../layouts/Default";

function PostPage() {
    const titleRef = useRef();
    const contentRef = useRef();

    const {state} = useLocation();

    const [post, setPost] = useState({
        title: "No title",
        content: "No content",
    });

    useEffect(() => {
        titleRef.current.innerHTML = post.title;
    }, [post.title]);

    useEffect(() => {
        contentRef.current.innerHTML = post.content;
    }, [post.content])
    
    useEffect(() => {
        setPost(state);
    }, []);

    return (
        <>
            <DefaultLayout>
                {post &&
                    <>
                        <div className="text-primary d-flex">
                            <Link to={'/'}>
                                <FontAwesomeIcon size="3x" icon={faHandPointLeft} />
                            </Link>
                            &nbsp;
                            <p ref={titleRef}></p>
                        </div>
                        <hr />
                        <p ref={contentRef} className="bg-white text-dark post-content"></p>
                    </>
                }

            </DefaultLayout>
        </>
    )
}

export default PostPage;