import * as React from "react";
import { observer } from "mobx-react";
import { Accordeon } from "../Accordeon";

import { AccordeonState } from "../../state";

@observer
export class AccordeonBlock extends React.PureComponent<{}, {}>{
    accordeonState: AccordeonState;
    newThink: string;
    constructor(props: any) {
        super(props)
        this.accordeonState = new AccordeonState();
        this.newThink = ''
    }

    render() {
        return (
            <Accordeon items={this.accordeonState.accordeonContent} onClick={this.accordeonState.clickItem} />
        )
    }
}