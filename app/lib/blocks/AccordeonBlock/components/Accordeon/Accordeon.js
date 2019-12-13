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
const AccordeonItem_1 = require("../AccordeonItem");
const mobx_react_1 = require("mobx-react");
let Accordeon = class Accordeon extends React.PureComponent {
    renderItem() {
        return this.props.items.map((el, i) => React.createElement(AccordeonItem_1.AccordeonItem, { key: i, onClick: this.props.onClick.bind(this, el.id), id: el.id, title: { opened: el.title.opened, closed: el.title.closed }, isOpened: el.isOpened, content: el.content }));
    }
    render() {
        return (React.createElement("div", { className: "accordeon-wrapp" },
            React.createElement("div", { className: "accordeon-wrapp--inner" },
                React.createElement("div", { className: "accordeon-elements-holder" }, this.renderItem()))));
    }
};
Accordeon = __decorate([
    mobx_react_1.observer
], Accordeon);
exports.Accordeon = Accordeon;
//# sourceMappingURL=Accordeon.js.map