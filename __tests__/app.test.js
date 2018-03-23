import React from 'react'
import H5 from '../src/layouts/app/app'
import Enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
const EnzymeAdapter = require('enzyme-adapter-react-15');

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('render',()=>{
    test('app',()=>{
        global.APP=require('../libs/APP')
        const app=Enzyme.render(<H5 />);
        expect(toJson(app)).toMatchSnapshot();
    })
})