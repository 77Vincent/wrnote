import React, { useState } from 'react';

import {Editor} from "../component";

export default () => {
    const content = `## hello world\n### yes`
    return (
        <div className='root'>
            <Editor />
        </div>
    );
};
