import { Component, createElement } from "react";
import Picker from "react-mobile-picker";

export class PickerContainer extends Component {
    state = {
        pickerValue: {
            group: ""
        }
    };

    items = [];

    componentDidUpdate(prevProps) {
        const { itemsDatasource, attributeAssociation } = this.props;
        if (
            (prevProps.itemsDatasource?.status === "loading" && itemsDatasource?.status === "available") ||
            (prevProps.itemsDatasource !== itemsDatasource && itemsDatasource?.status === "available")
        ) {
            this.generateItems();
        }
        if (attributeAssociation.value && attributeAssociation.value.id !== this.state.pickerValue.group) {
            this.setState({ pickerValue: { group: attributeAssociation.value.id } });
        }
    }

    generateItems = () => {
        const { itemsDatasource, itemContent, attributeAssociation } = this.props;
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

        // Get the object currently associated and set that as the initial value, if empty simply set it to the first item in the list
        if (attributeAssociation.value) {
            const initialItem = this.items.find(item => item.id === attributeAssociation.value.id);
            if (initialItem) {
                this.setState({ pickerValue: { group: initialItem.id } });
            }
        } else if (this.items.length > 0) {
            this.setState({ pickerValue: { group: this.items[0].id } });
        }
    };

    setPickerValue = (value, key) => {
        const { attributeAssociation, itemsDatasource } = this.props;
        this.setState({ pickerValue: { [key]: value.group } });

        const selectedItem = itemsDatasource.items.find(mxObject => mxObject.id === value.group);
        if (selectedItem) {
            attributeAssociation.setValue(selectedItem);
        }
    };

    render() {
        const { height, itemHeight } = this.props;
        const { pickerValue } = this.state;

        return (
            <Picker
                value={pickerValue}
                onChange={this.setPickerValue}
                height={height}
                itemHeight={itemHeight}
                wheelMode={"normal"}
                className="mobile-picker"
                onWheel={event => event.stopPropagation()}
            >
                <Picker.Column name="group">
                    {this.items.map(item => (
                        <Picker.Item
                            key={item.id}
                            value={item.id}
                            className={`picker-item ${pickerValue.group === item.id ? "selected" : ""}`}
                        >
                            {item.content}
                        </Picker.Item>
                    ))}
                </Picker.Column>
            </Picker>
        );
    }
}
