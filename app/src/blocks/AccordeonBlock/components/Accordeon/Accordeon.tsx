import * as React from "react";
import { AccordeonType } from "../../../../types";
import { AccordeonItem } from "../AccordeonItem";
import { observer } from "mobx-react";

@observer
export class Accordeon extends React.PureComponent<AccordeonType, {}>{

    renderItem() {
        return this.props.items.map((el, i) => <AccordeonItem
            key={i} onClick={this.props.onClick.bind(this, el.id)}
            id={el.id}
            title={{ opened: el.title.opened, closed: el.title.closed }}
            isOpened={el.isOpened}
            content={el.content} />
        )
    }
    render() {
        return (
            <div className="accordeon-wrapp">
                <div className="accordeon-wrapp--inner">
                    <div className="accordeon-elements-holder">
                        {this.renderItem()}
                    </div>
                </div>
            </div>
        )
    }
}
