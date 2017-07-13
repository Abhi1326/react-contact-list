/**
 * Created by Counter on 7/2/2017.
 */
import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Contact from './contactus'

test('Contact component should render as expected',()=>{
    const component =shallow(<Contact/>);
    const tree =toJson(component);
    expect(tree).toMatchSnapshot()
});