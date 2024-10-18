import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'tinymce/tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/icons/default';
import 'tinymce/models/dom';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/image';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/media';
import 'tinymce/plugins/table';
import 'tinymce/plugins/code';
import 'tinymce/plugins/preview';

const TinyMCEEditor = () => {
    const [content, setContent] = useState('');

    return (
        <Editor
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
                    "media",
                    "table",
                    "code",
                    "preview"
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
