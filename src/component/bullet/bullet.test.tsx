import React from 'react';
import {render} from '@testing-library/react';
import TestThemeProvider from '../../utils/TestThemeProvider';
import Component from './';
import {DataProps} from './types';
import {number} from '../../asset'

const Bullet: React.FC<DataProps> =(props)=>(
    <TestThemeProvider>
        <Component {...props}/>
    </TestThemeProvider>
);

describe("Bullet Props",()=>{
it("should render round Bullets", ()=>{
        const {container} = render(<Bullet data={number} round/>);
        const cont = container.children.item;
        expect(cont).toContainElement
    })
})