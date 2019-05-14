import React from "react";
import Select from "react-select";

const options = [
    { value: "MEMBER", label: "평사원 (Member)" },
    { value: "MANAGER", label: "관리자 (Manager)" }
];

class SimpleSelect extends React.Component {
    state = {
        selectedOption: null
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.props.handleChange(selectedOption);
    };
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder='권한 입력'
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderColor: '#1C90FB',
                  }),
                }}
            />
        );
    }
}

export default SimpleSelect;
