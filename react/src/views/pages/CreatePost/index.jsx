import 'bootstrap/dist/css/bootstrap.css';
import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DefaultLayout from "../../layouts/Default";

function CreatePostPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitle = () => {
        const title = tinymce.activeEditor.getContent();
        setTitle(title);
    }

    const handleContent = () => {
        const content = tinymce.activeEditor.getContent();
        setContent(content);
    }


    const handleSubmit = () => {

        confirm('Are you sure you want to submit?') &&

        axios.post(import.meta.env.VITE_API + "/posts", {
            title: title,
            content: content,
        })
            .then((response) => {
                if (response && response.status === 200) {
                    alert("Created post successfully");
                }
            })
            .catch((error) => {
                if (error) {
                    alert("Created post unsuccessfully");
                }
            })
            .finally(() => {
            });
    }

    return (
        <>
            <DefaultLayout>
                <div className='row'>
                    <div className='col-8'>
                        <div className="text-primary d-flex">
                            <Link to={'/'}>
                                <FontAwesomeIcon size="3x" icon={faHandPointLeft} />
                            </Link>
                            &nbsp;
                            <h1 className="text-primary">Create post</h1>
                        </div>
                    </div>
                    <div className='col-4 text-end'>
                        <button onClick={handleSubmit} className='py-2 px-4 fw-bold'>Post</button>
                    </div>
                </div>
                <hr />
                <Editor
                    apiKey='auit8ixs8et1dfdcas3rowxq6eovkc5oev2yyu315ua53o7z'
                    // initialValue='<h1>Here is the title</h1>'
                    init={{
                        menubar: false,
                        statusbar: false,
                        height: 150,
                        block_formats: 'Header=h1;',
                        plugins: 'ai  anchor charmap emoticons searchreplace wordcount casechange pageembed permanentpen advtemplate advtable advcode tableofcontents powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                        toolbar: 'undo redo | blocks fontfamily | italic underline |emoticons charmap',
                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    onChange={handleTitle}
                />

                <Editor
                    apiKey='auit8ixs8et1dfdcas3rowxq6eovkc5oev2yyu315ua53o7z'
                    init={{
                        statusbar: false,
                        menu: {
                            file: { title: 'File', items: '' },
                            edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
                            view: { title: 'View', items: 'visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
                            insert: { title: 'Insert', items: 'image link media inserttable | charmap emoticons hr' },
                            format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | removeformat' },
                            tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | a11ycheck code wordcount' },
                            table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
                            help: { title: 'Help', items: 'help' }
                        },
                        plugins: 'ai mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    onChange={handleContent}
                />
            </DefaultLayout>
        </>
    )
}

export default CreatePostPage;