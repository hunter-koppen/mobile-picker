import { Component, createElement } from "react";
import Picker from "react-mobile-picker";

export class PickerContainer extends Component {
    state = {
        pickerValue: ""
    };

    items = [];

    componentDidUpdate(prevProps) {
        const { itemsDatasource } = this.props;
        if (prevProps.itemsDatasource?.status === "loading" && itemsDatasource?.status === "available") {
            this.generateItems();
        }
    }

    generateItems = () => {
        const { itemsDatasource, itemContent } = this.props;
        this.items = [];

        itemsDatasource.items.forEach(mxObject => {
            const id = mxObject.id;
            const content = itemContent.get(mxObject);
            const item = {
                id,
                content
            };
            this.items.push(item);
        });

        if (this.items.length > 0) {
            this.setState({ pickerValue: this.items[0].id });
        }
    };

    setPickerValue = (name, value) => {
        // Check if the new value exists in items before updating the state
        const isValidValue = this.items.some(item => item.id === value);
        if (isValidValue) {
            this.setState({ pickerValue: value });
        }
    };

    render() {
        const { pickerValue } = this.state;

        return (
            <Picker value={pickerValue} onChange={this.setPickerValue}>
                <Picker.Column name="Group">
                    {this.items.map(item => (
                        <Picker.Item key={item.id} value={item.id}>
                            {({ selected }) => <div className={selected ? "selected" : ""}>{item.content}</div>}
                        </Picker.Item>
                    ))}
                </Picker.Column>
            </Picker>
        );
    }
}
