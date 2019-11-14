import React from 'react';
import {storiesOf} from '@storybook/react';
import Component from './';
import {number,skills} from '../../asset'

storiesOf("Bullet",module)
  .add("Default Bullet with String data",()=>
  (<Component data={skills}/>))
  .add("Rounded bullet with number",()=>
  (<Component data={number} round/>))