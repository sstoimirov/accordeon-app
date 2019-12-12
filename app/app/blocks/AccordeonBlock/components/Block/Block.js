var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import { observer } from "mobx-react";
import { Accordeon } from "../Accordeon";
import { AccordeonState } from "../../state";
let Block = class Block extends React.PureComponent {
    constructor(props) {
        super(props);
        this.accordeonState = new AccordeonState();
    }
    render() {
        return (React.createElement(Accordeon, { items: this.accordeonState.accordeonContent, onClick: this.accordeonState.clickItem }));
    }
};
Block = __decorate([
    observer
], Block);
export { Block };
//# sourceMappingURL=Block.js.map