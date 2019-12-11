import * as React from "react";
import { shallow, configure } from 'enzyme';
import { AccordeonItem } from "./AccordeonItem";
import { AccordeonItemType } from "../../../../types";
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe("AccordeonItem", () => {
    let props: AccordeonItemType;
    beforeEach(() => {
        props = {
            id: "122",
            title: { opened: "Opened", closed: "Closed" },
            isOpened: true,
            content: "Some content",
            onClick: jest.fn()
        }
    })
    it("Renders correclty with provided props and isOpened set to true", () => {
        const comp = shallow(<AccordeonItem {...props} onClick={jest.fn()} />)
        expect(comp).toMatchSnapshot();
    })

    it("Renders correclty with provided props and isOpened set to false", () => {
        const updatedProps = { ...props, isOpened: false }
        const comp = shallow(<AccordeonItem {...updatedProps} onClick={jest.fn()} />)
        expect(comp).toMatchSnapshot();
    })
})