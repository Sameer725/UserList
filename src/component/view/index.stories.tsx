import React from 'react';
import {storiesOf} from '@storybook/react';
import Component from './index';

storiesOf("View",module)
     .add("Border and row",()=>(<Component border>
        <span>Sameer</span>
        <span>Sameer</span>
    </Component>))
     .add("Column,Card,Fixed dimesion",()=>(<Component column card fixed>
        <span>Sameer</span>
        <span>Sameer</span>
    </Component>))