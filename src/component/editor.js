import React, {useEffect, useRef, useState} from 'react';
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import {Container, Col, Row} from "react-bootstrap";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {tomorrow as theme} from 'react-syntax-highlighter/dist/esm/styles/prism'

const StyledTextarea = styled.textarea`
    height: 100vh;
    border: none;
    width: 100%;
    padding: 1em;
    overflow: auto;
    resize: none;
    tab-size: 4;
    &:focus {
        outline: none;
    }
`
const StyledReactMarkdown = styled(ReactMarkdown)`
    height: 100vh;
    padding: 1em;
    overflow: auto;
    
    h1 {
        font-size: 2.4em;
        border-bottom: 1px solid lightgray;
        margin-top: 0.5em;
    }
    
    h2 {
        font-weight: bold;
        font-size: 1.8em;
        margin-top: 0.8em;
    }
    
    h3 {
    }
    
    h4 {
    }
    
    h5 {
    }
    
    h6 {
    }
`

const dummyText = `
# 1 hello world
## 1.1 hello world
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
## 1.2 hello world
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
### 1.2.1 hello world
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
#### 1.1.1.1 hello world
\`\`\`js
// code block example
function helloWorld() {
    return 'hello world'
}
\`\`\`
##### 1.1.1.1.1 hello world
###### 1.1.1.1.1.1 hello world
`

const components = {
    code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                style={theme}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                {...props}
            />
        ) : (
            <code className={className} {...props} />
        )
    }
}

export default ({initialText = dummyText}) => {
    const textareaEl = useRef()
    const [content, setContent] = useState({
        value: initialText,
        caret: -1,
    })

    const onType = (e) => setContent({
        value: e.target.value,
        caret: e.target.selectionEnd,
    })
    const onKeydown = (e) => {
        if (e.Key === 'Tab' || e.which === 9) {
            e.preventDefault()
            const {value, selectionStart: start, selectionEnd: end} = e.target
            const c = value.substring(0, start) + '\t' + value.substring(end)
            setContent({
                value: c,
                caret: start + 1,
            })
        }
    }

    useEffect(() => {
        console.log(content.caret)
        textareaEl.current.setSelectionRange(content.caret, content.caret )
    }, [content])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <form>
                        <StyledTextarea
                            ref={textareaEl}
                            value={content.value}
                            onKeyDown={onKeydown}
                            onChange={onType}
                        />
                    </form>
                </Col>

                <Col>
                    <StyledReactMarkdown components={components} children={content.value}/>
                </Col>
            </Row>
        </Container>
    );
};
