"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class AccordeonItem extends React.PureComponent {
    render() {
        const cls = "accordeon-text-holder";
        const activeCls = this.props.isOpened ? `${cls} active` : cls;
        return (React.createElement("div", { className: "accordeon-element-header", onClick: this.props.onClick },
            React.createElement("div", { className: "accordeon-title" }, this.props.isOpened ? this.props.title.opened : this.props.title.closed),
            React.createElement("div", { className: activeCls }, this.props.content)));
    }
}
exports.AccordeonItem = AccordeonItem;
//# sourceMappingURL=AccordeonItem.js.map