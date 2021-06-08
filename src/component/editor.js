import React, {useState} from 'react';

import ReactMarkdown from "react-markdown";

export default ({initialContent = ''}) => {
    const [content, setContent] = useState(initialContent)
    const onType = ({target: {value}}) => setContent(() => value)

    return (
        <div className='wrapper'>
            <form>
                <textarea onChange={onType}/>
            </form>
            <ReactMarkdown children={content}/>
        </div>
    );
};
