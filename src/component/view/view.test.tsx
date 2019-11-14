import React from 'react';
import { render } from '@testing-library/react';
import Component from './';
import { ViewProps } from './type';
import TestThemeProvider from '../../utils/TestThemeProvider';

const View: React.FC<ViewProps> =({...props})=>(
    <TestThemeProvider>
        <Component {...props} />
    </TestThemeProvider>
);

describe("View Props",() => {
    it("should render default props", () =>{
        const {getByText} = render(<View>Default View</View>);
        const view = getByText("Default View");
        expect(view).toHaveTextContent('Default View');
    });

    it("should render with style and with class name and fixed dimension", ()=>{
        const {container,getByText} = render(<View style={{borderRadius:15}} className='view_class' fixed>
            Styled
        </View>);

        const cont = container.children.item(0) as HTMLElement;
        expect(cont).toHaveStyle("border-radius: 15px;height:145px; width:32rem");
        const view = getByText('Styled');
        expect(view).toHaveClass('view_class');
    });

    it("should render with borderRadius and flex direction column", ()=>{
        const {container} = render(<View radius={15} column>
            Radius
        </View>);

        const cont = container.children.item(0) as HTMLElement;
        expect(cont).toHaveStyle("border-radius: 15px ; flex-direction:column");
    });

})