import "jest"
import * as React from "react";
import { shallow, configure } from 'enzyme';
import { AccordeonBlock } from "./AccordeonBlock";

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
describe("Block",()=>{
    it("Renders correctly", ()=>{
        const comp = shallow(<AccordeonBlock />);
        expect(comp).toMatchSnapshot();
    })
})