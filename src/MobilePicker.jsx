import { Component, createElement } from "react";

import { PickerContainer } from "./components/PickerContainer";

export class MobilePicker extends Component {
    render() {
        return (
            <PickerContainer
                attributeAssociation={this.props.attributeAssociation}
                itemsDatasource={this.props.itemsDatasource}
                itemContent={this.props.itemContent}
                height={this.props.height}
                itemHeight={this.props.itemHeight}
            />
        );
    }
}
