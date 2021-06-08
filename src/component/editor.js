import React, {useState} from 'react';
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import {Container, Col, Row} from "react-bootstrap";

const StyledTextarea = styled.textarea`
    min-height: 100vh;
    border: none;
    width: 100%;
    padding: 1em;
    overflow: auto;
    resize: none;
    &:focus {
        outline: none;
    }
`
const StyledReactMarkdown = styled(ReactMarkdown)`
    min-height: 100vh;
    padding: 1em;
    overflow: auto;
    
    h1 {
        border-bottom: 1px solid lightgray;
        margin-top: 0.5em;
    }
    
    h2 {
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
### 1.1.1 hello world
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

export default ({initialContent = dummyText}) => {
    const [content, setContent] = useState(initialContent)
    const onType = ({target: {value}}) => setContent(() => value)

    return (
        <Container fluid>
            <Row>
                <Col>
                    <form>
                        <StyledTextarea value={content} onChange={onType}/>
                    </form>
                </Col>

                <Col>
                    <StyledReactMarkdown children={content}/>
                </Col>
            </Row>
        </Container>
    );
};
