import React from 'react';
import theme,{styled} from '../../theme';
import {BulletProps,DataProps} from './types';

const b_colors = [
    '#d1c4e9',
    '#d81b60',
    '#90caf9',
    '#e64a19',
    '#e0e0e0',
    '#78909c'
]

const f_color = [theme.colors.black,theme.colors.white]

const StyleBullet = styled.span<BulletProps>`
align-items:center;
justify-content:center;
display:flex;
flex-grow:1;
margin:0 0 0 3px;
border-radius:16px;
height:15px;
align-self:flex-end;
border:0.6px solid ${theme.colors.black3};
${({round})=>(typeof round === 'boolean' ?
 "height:20px; width:20px; border-radius:15px; flex-grow:0" 
:`height:${round}; width:${round}: border-radius:${round}`
)}
`

const Bullet : React.FC <DataProps> =({data,...rest})=>{
    
      const datas =  data.map((item,i)=>{
          
        return <StyleBullet
        key={i}
        style= {{backgroundColor:b_colors[i % 6]}}
        {...rest}
        >
          <span style={{fontSize:10,
                fontWeight:'bold',display:'flex',
                color:f_color[i%2]
              }}>{item}
           </span>

        </StyleBullet>
    }) 

    return <>
    {
        datas
    }
    </>
}

export default Bullet;