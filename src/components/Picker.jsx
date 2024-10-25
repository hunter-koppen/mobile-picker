import { Component, createElement } from "react";
import Picker from "react-mobile-picker";

export class PickerContainer extends Component {
    render() {
        return <div className="widget-hello-world">Hello {this.props.sampleText}</div>;
    }
}
