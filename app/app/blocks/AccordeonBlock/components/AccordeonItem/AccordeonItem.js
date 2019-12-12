import * as React from "react";
export class AccordeonItem extends React.PureComponent {
    render() {
        const cls = "accordeon-text-holder";
        const activeCls = this.props.isOpened ? `${cls} active` : cls;
        return (React.createElement("div", { className: "accordeon-element-header", onClick: this.props.onClick },
            React.createElement("div", { className: "accordeon-title" }, this.props.isOpened ? this.props.title.opened : this.props.title.closed),
            React.createElement("div", { className: activeCls }, this.props.content)));
    }
}
//# sourceMappingURL=AccordeonItem.js.map