import { observable, action } from "mobx";
import { AccordeonItemType } from "../../../types";
import { AccordeonData } from "../../../data";

export class AccordeonState {
    @observable accordeonContent: AccordeonItemType[]
    constructor() {
        this.accordeonContent = AccordeonData
    }

    @action.bound clickItem(id: string) {
        const item = this.accordeonContent.find(i => i.id === id)

        if (item) {
            item.isOpened = true;
            // item.isOpened = !item.isOpened;

            const openedItem = this.accordeonContent.filter(x => x.isOpened === true);
            const closeItem = openedItem.find(i => i.id !== id);

            if (closeItem) {
                closeItem.isOpened = false;
            }
        }
    }
}