import React from 'react';
import {ReactComponent as Regular} from '../../asset/star-regular.svg';
import {ReactComponent as Solid} from '../../asset/star-solid.svg';
import {RaterProps} from './types';


const Rater : React.FC<RaterProps> = ({
    rate,
})=>{
const {total,rating} = rate;
const _khali = Array.apply(null,Array(total-rating)).map(item=>{
    return <Regular style={{flex:1,color:'red'}}/>
});
const _star = Array.apply(null,Array(total)).map(item=> {
    return <Solid style={{flex:1,color:'red'}} />
});

_star.splice(rating,total-rating,_khali);

const actual = _star.flatMap(item=>{
    return item
});

return <div style={{height:20,flex:total*0.15,display:'flex',flexDirection:'row',marginLeft:10}}>
    {
        actual
    }
</div>
}

export default Rater;