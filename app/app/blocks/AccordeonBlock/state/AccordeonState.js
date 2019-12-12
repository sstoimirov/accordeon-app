var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from "mobx";
import { AccordeonData } from "../../../data";
export class AccordeonState {
    constructor() {
        this.accordeonContent = AccordeonData;
    }
    clickItem(id) {
        const item = this.accordeonContent.find(i => i.id === id);
        if (item) {
            item.isOpened = true;
            const openedItem = this.accordeonContent.filter(x => x.isOpened === true);
            const closeItem = openedItem.find(i => i.id !== id);
            if (closeItem) {
                closeItem.isOpened = false;
            }
        }
    }
}
__decorate([
    observable
], AccordeonState.prototype, "accordeonContent", void 0);
__decorate([
    action.bound
], AccordeonState.prototype, "clickItem", null);
//# sourceMappingURL=AccordeonState.js.map