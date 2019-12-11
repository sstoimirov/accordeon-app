import * as React from "react";
import { shallow, configure } from 'enzyme';
import { Accordeon } from "./Accordeon";
import { AccordeonData } from "../../../../data";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe("Accordeon", () => {

    it("Renders correclty with provided props", () => {
        const comp = shallow(<Accordeon items={AccordeonData} onClick={jest.fn()} />)
        expect(comp).toMatchSnapshot();
    })
})