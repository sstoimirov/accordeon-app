import * as React from "react";
import { AccordeonItemType } from "../../../../types"

export class AccordeonItem extends React.PureComponent<AccordeonItemType, {}>{

    render() {
        const cls = "accordeon-text-holder"
        const activeCls = this.props.isOpened ? `${cls} active` : cls;
        return (
            <div className={"accordeon-element-header"} onClick={this.props.onClick}>
                <div className="accordeon-title">{this.props.isOpened ? this.props.title.opened : this.props.title.closed}</div>
                <div className={activeCls}>
                    {this.props.content}
                </div>
            </div >
        )
    }
}