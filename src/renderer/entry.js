import React from 'react';

import {Editor} from "../component";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
`

export default () => {
    return (
        <Wrapper>
            <Editor />
        </Wrapper>
    );
};
