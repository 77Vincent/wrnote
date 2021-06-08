import React, {useState} from 'react';
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import {Section} from "./styled";

const StyledTextarea = styled.textarea`
    width: 100%;
`

export default ({initialContent = ''}) => {

    const [content, setContent] = useState(initialContent)
    const onType = ({target: {value}}) => setContent(() => value)

    return (
        <div className='wrapper'>
            <Section>
                <form>
                    <StyledTextarea onChange={onType}/>
                </form>
            </Section>
            <ReactMarkdown children={content}/>
        </div>
    );
};
