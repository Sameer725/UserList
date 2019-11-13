import React from 'react';
import theme,{styled} from '../../theme';
import {DetailProps} from './types';

const StyleDetail = styled.div<DetailProps>`
outline:none;
padding:3px;
display:flex;
flex:1;
${({divider})=>(divider ? `border-bottom: 2px solid ${theme.colors.border}`:null)};
flex-direction:${({dcolumn})=>(dcolumn ? "column" : "row")};
justify-content:space-between;
/* background-color:red; */
margin:3px 0;
`

const Detail : React.FC<DetailProps> = ({
divider,
dcolumn,
style,
className,
left,
right,
name
}) =>{
return <StyleDetail
 divider={divider}
 style={style}
 className={className}
 dcolumn={dcolumn}
 >{
     left ?
 <span style={{fontSize:15,
 fontWeight:'bold',
 flex:'content',
 display:'flex',
 letterSpacing:0.2,
 color:theme.colors.purple
 }}>{left.name }

 {left.role && <span style={{fontSize:10,
    fontWeight:'500',marginLeft:8,
    display:'flex',alignSelf:'flex-end',
    letterSpacing:0.5,color:theme.colors.caption
    }}>{left.role}
    </span>}

 </span>
 :
 name ?
 <span style={{fontSize:15,
 fontWeight:'bold',
 flex:'content',
 display:'flex',
 marginTop:6,
 marginRight:4,
 letterSpacing:0.2,
 }}>{name }
 </span>
 :
 null
 }
 {
     right ? right:null
 }
</StyleDetail>

};

export default Detail;