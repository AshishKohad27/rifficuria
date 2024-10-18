import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor = () => {
    const [content, setContent] = useState('');

    return (
        <Editor
            // apiKey="gpl"  // Optional: Replace with your TinyMCE API key
            value={content}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    "advlist",
                    "anchor",
                    "autolink",
                    "link",
                    "lists",
                    "searchreplace",
                    "wordcount",
                    "directionality",
                    "image",
                    "emoticons",
                ],
                toolbar:
                    "bold italic underline forecolor alignleft aligncenter alignright bullist numlist link code directionality media table preview image emoticons | undo redo",
                content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(newContent) => setContent(newContent)}
        />
    );
};

export default TinyMCEEditor;
