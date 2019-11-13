import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import {ThemeProvider} from 'styled-components';
import theme from '../src/theme/index';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories(){
    req.keys().forEach(filename=>req(filename));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories,module);
