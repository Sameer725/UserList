import React from 'react';
import {storiesOf} from '@storybook/react';
import Component from '../component/view';
import Profile from '../component/profile';
import Detail from '../component/detail';
import Bullet from '../component/bullet';
import Rater from '../component/rater';
import {rate,Companies,skills,detail} from '../asset'


storiesOf("Complete UserList",module)

 .add("UserList",()=>(<Component card fixed >
     <Profile flex={1}/>
     <Component flex={4}  column style={{marginBottom:15}}>
         <Detail divider 
         left={detail}
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