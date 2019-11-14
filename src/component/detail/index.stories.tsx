import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from  './';
import Rater from '../rater'
import {rate,detail} from '../../asset';

storiesOf("Detail",module)
    .add("With name and divider",()=>(
        <Component name="Sameer" divider/>
    ))
    .add("with left elemet",()=>(
        <Component left={detail} />
    ))
    .add("with Right elemet",()=>(
        <Component  right={<Rater rate={rate}/>}/>
    ))
    .add("Complete detail with Horizontal Orientation",()=>(
        <Component left={{name:'Sameer' , role:"Developer"}}  
        right={<Rater rate={rate}/>}/>
    ))
    .add("Complete detail with Verticle Orientation and with no role",()=>(
        <Component left={{name:'Sameer'}}  
        right={<Rater rate={rate}
        />}
        dcolumn
        />
    ))