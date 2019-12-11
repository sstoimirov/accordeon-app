import "jest"
import * as React from "react";
import { shallow, configure } from 'enzyme';
import { Block } from "./Block";

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
describe("Block",()=>{
    it("Renders correctly", ()=>{
        const comp = shallow(<Block />);
        expect(comp).toMatchSnapshot();
    })
})