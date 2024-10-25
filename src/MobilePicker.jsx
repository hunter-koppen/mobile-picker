import { Component, createElement } from "react";

import { PickerContainer } from "./components/Picker";
import "./ui/MobilePicker.css";

export class MobilePicker extends Component {
    render() {
        return (
            <PickerContainer
                attributeAssociation={this.props.attributeAssociation}
                dataSource={this.props.dataSource}
                content={this.props.content}
                onChangeAction={this.props.onChangeAction}
            />
        );
    }
}
