import React from 'react';
import {storiesOf} from '@storybook/react';
import Component from './index';

storiesOf("Profile",module)
   .add("default",()=>(<Component>
       <span>Sameer</span>
   </Component>))
    .add("Outline",()=>(<Component outline>
         <span>Sameer</span>
     </Component>))
    //  .add("Border",()=>(<Component>
    //     <span>Sameer</span>
    //     <span>Sameer</span>
    // </Component>))
    //  .add("Column",()=>(<Component>
    //     <span>Sameer</span>
    //     <span>Sameer</span>
    // </Component>))