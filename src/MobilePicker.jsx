import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/MobilePicker.css";

export class MobilePicker extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
