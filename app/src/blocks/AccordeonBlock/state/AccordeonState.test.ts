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

    it("AccordeonItems does not trigger update if no id exist", () => {
        const state = new AccordeonState();
        state.clickItem("item_10");
        expect(state.clickItem("item_10")).toBe(undefined);
    })
})