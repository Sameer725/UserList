import React from 'react';
import {storiesOf} from '@storybook/react';
import Component from './index';
import Profile from '../profile/index';
import Detail from '../detail/index';
import Bullet from '../bullet/index';
import Rater from '../rater/'

const obj = {
    name:'Sameer Khanal',
    role:'Developer'
}

const skills = ['Nodejs','Reactjs','Graphql'];
const Companies = ['Ex-MicroSoft','Ex-Facebook','Ex-Google'];
const rate = {total:10,rating:4}

storiesOf("View",module)
   .add("default",()=>(<Component>
       <span>Sameer</span>
   </Component>))
    .add("Card",()=>(<Component card fixed >
        <Profile flex={1}/>
        <Component flex={4}  column style={{marginBottom:15}}>
            <Detail divider 
            left={obj}
            right={<Rater rate={rate} />}
            />
             <Detail divider 
             name={'Skills:'}
             right={<Bullet data={skills}/>}
            />
             <Detail divider 
            name={'Companies:'}
            right={<Bullet data={Companies}/>}
            />
        </Component>
    </Component>))
     .add("Border",()=>(<Component border>
        <span>Sameer</span>
        <span>Sameer</span>
    </Component>))
     .add("Column",()=>(<Component column card fixed>
        <span>Sameer</span>
        <span>Sameer</span>
    </Component>))