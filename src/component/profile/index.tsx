import React from 'react';
import theme, { styled } from '../../theme';
import {ProfileProps} from './types';
import {ReactComponent as Logo} from '../../asset/user-solid.svg';

const StyleProfile = styled.div<ProfileProps>`
  border-radius:${({radius})=>radius}px;
  height:${({height})=>height}px;
  width:${({width})=>width}px;
  padding:10px;
  display:flex;
  flex-wrap:'wrap';
  ${({outline})=>(outline ? 
    `border:3px solid ${theme.colors.purple}` : 
    `border: 1px solid ${theme.colors.border}` )};
    margin:8px 6px;
    flex:${({flex})=>flex};

`

const Profile: React.FC<ProfileProps> = ({
    style,
    height,
    width,
    radius,
    outline,
    flex,
    image
})=>{
    return(
        <StyleProfile
        height={height}
        width={width}
        radius={radius}
        style={style}
        outline={outline}
        flex={flex}
        >
            {image ? <img src={image} alt="" style={{overflow:'hidden',objectFit:'cover',borderRadius:radius}}/>:<Logo style={{flex:1}}/>}
        </StyleProfile>
    )
}

Profile.defaultProps={
    height:110,
    width:80,
    radius:18,
}

export default Profile;