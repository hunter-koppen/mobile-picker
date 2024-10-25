import { Component, createElement } from "react";

import { PickerContainer } from "./components/PickerContainer";
import "./ui/MobilePicker.css";

export class MobilePicker extends Component {
    render() {
        return (
            <PickerContainer
                attributeAssociation={this.props.attributeAssociation}
                itemsDatasource={this.props.itemsDatasource}
                itemContent={this.props.itemContent}
            />
        );
    }
}
