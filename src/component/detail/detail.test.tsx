import React from 'react';
import {render} from '@testing-library/react';
import TestThemeProvider from '../../utils/TestThemeProvider';
import Component from './';
import {DetailProps} from './types';
import {detail} from '../../asset';

const Detai : React.FC<DetailProps>=({...props})=>(
    <TestThemeProvider>
        <Component {...props} />
    </TestThemeProvider>
);

describe("Detail Props" , ()=>{
    it("should render with name on Left side", () =>{
        const {container} = render(<Detai name='Sameer'/>);
        const cont = container.children.item(0) ;
        expect(cont).toContainHTML
    });

    it("should render the name and role ",()=>{
        const {container} = render(<Detai left={detail}/>);
        const cont = container.children.item;
        expect(container).toContainHTML;
    });

    it("should return right element",()=>{
        const {container} = render(<Detai right={<Detai/>}/>);
        const cont = container.children.item;
        expect(cont).toContainHTML;
    });

})