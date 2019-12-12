import "jest"
import { AccordeonState } from "./AccordeonState";

describe("TableReactState", () => {
    it("Accordeon clicked item to change it's state open/close", () => {
        const state = new AccordeonState();
        state.accordeonContent[1].isOpened = true;
        state.clickItem("item_0");
        expect(state.accordeonContent[0].isOpened).toBe(true);
        expect(state.accordeonContent[1].isOpened).toBe(false);
        expect(state.accordeonContent[2].isOpened).toBe(false)

    });

    it("AccordeonItems does not change isOpened property if no id exist", () => {
        const state = new AccordeonState();
        state.accordeonContent = [{
            id: "item_0",
            title: {
                opened: "Close",
                closed: "Open"
            },
            isOpened: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            onClick: () => { }
        },]
        state.clickItem("item_0");
        expect(state.clickItem("item_1")).toBe(undefined);
    })
})