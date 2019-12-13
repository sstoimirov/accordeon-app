"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const mobx_react_1 = require("mobx-react");
const Accordeon_1 = require("../Accordeon");
const state_1 = require("../../state");
let Block = class Block extends React.PureComponent {
    constructor(props) {
        super(props);
        this.accordeonState = new state_1.AccordeonState();
    }
    render() {
        return (React.createElement(Accordeon_1.Accordeon, { items: this.accordeonState.accordeonContent, onClick: this.accordeonState.clickItem }));
    }
};
Block = __decorate([
    mobx_react_1.observer
], Block);
exports.Block = Block;
//# sourceMappingURL=Block.js.map