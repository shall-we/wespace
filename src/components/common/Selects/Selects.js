import React from "react";
import Select from "react-select";

const options = [
    { role: "MEMBER", label: "평사원" },
    { role: "MANAGER", label: "관리자" }
];

class SimpleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            permission: '',
            userId: ''
        };
        // console.log('invitedMember: ', this.state.invitedMember);
    }

    handleChange = (selectedOption) => {

        console.log(`selectedOption.role: `, selectedOption.role);
        console.log(`this.props.member.id:`, this.props.member);

        this.setState({ selectedOption });
        this.props.onSetInvite(this.props.member.value, selectedOption.role);

        // console.log('this.state.permission: ', this.state.permission);
        // console.log('this.state.userId: ', this.state.userId);
        // this.props.handleChange(selectedOption);
    };

    render() {
        const { selectedOption, styles } = this.state;

        return (
            <Select
                className={styles}
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder='권한 입력'
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderColor: '#1C90FB',
                    width: '115%'
                  }),
                }}
                autoWidth
            />
        );
    }
}

export default SimpleSelect;
