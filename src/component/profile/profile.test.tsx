import React from 'react';
import { render } from '@testing-library/react';
import Component from './';
import { ProfileProps } from './types';
import TestThemeProvider from '../../utils/TestThemeProvider';
import {uri} from './index.stories';

const Profile: React.FC<ProfileProps> =({...props})=>(
    <TestThemeProvider>
        <Component {...props} />
    </TestThemeProvider>
);

describe("Profile Props",() => {
    it("should render Profile default props", () =>{
        const {container} = render(<Profile/>);
        const profile = container.children.item;
        expect(profile).toContainElement;
    });
    it("should render  profile with given height width and radius", () =>{
        const {container} = render(<Profile height={25} width={25} radius={25} />);
        const profile = container.children.item(0) as HTMLElement;
        expect(profile).toHaveStyle(`height:25px ; width:25px ; border-radius:25px`);
    });
    it("should render the given image with given style",()=>{
        const {container} = render(<Profile image={uri} style={{borderRadius:15}}/>)
        const cont = container.children.item(0) ;
        expect(cont).toContainElement;
        expect(cont).toHaveStyle("border-radius:15px")
    });

})