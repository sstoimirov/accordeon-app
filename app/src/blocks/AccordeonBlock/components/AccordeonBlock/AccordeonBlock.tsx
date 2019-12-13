import * as React from "react";
import { observer } from "mobx-react";
import { Accordeon } from "../Accordeon";

import { AccordeonState } from "../../state";

@observer
export class AccordeonBlock extends React.PureComponent<{}, {}>{
    accordeonState: AccordeonState;
    constructor(props: any) {
        super(props)
        this.accordeonState = new AccordeonState();
    }

    render() {
        return (
            <Accordeon items={this.accordeonState.accordeonContent} onClick={this.accordeonState.clickItem} />
        )
    }
}