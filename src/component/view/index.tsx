import React from 'react';
import theme, {styled} from '../../theme/index';
import {ViewProps} from './type';

const StyleView = styled.div<ViewProps>`
    outline: none;
    background-color:#f0f0f0;
    display:flex;
    padding:4px;
    margin: 0.8rem 1rem;
    ${({card})=>(card ? `box-shadow: 0px 0px 7px ${theme.colors.black3}`:null)};
    ${({border})=>(border ? `border: 2px solid ${theme.colors.border}`:null)};
    ${({column})=>(column ? "flex-direction : column ":"")};
    ${({fixed})=>(fixed ? "height:145px; width:32rem": null)};
    border-radius:${({radius})=>radius ? radius : 6}px;
    flex:${({flex})=>flex};
`;


const View : React.FC<ViewProps> = ({
    children,
    className,
    card,
    border,
    column,
    style,
    fixed,
    radius,
    flex
})=>{
    return (
        <StyleView 
         style={style}
         card={card}
         className={className}
         column={column}
         border = {border}
         fixed={fixed}
         radius = {radius}
         flex={flex}
        >
            {children}
        </StyleView>
    )
}

View.defaultProps={
    card:false,
    flex:1
}

export default View;