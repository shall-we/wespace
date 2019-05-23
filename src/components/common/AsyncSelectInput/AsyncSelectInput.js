import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
// import { companyMembers } from 'styles/data';
import Button from "components/common/Button";
import Grid from '@material-ui/core/Grid';

let companyMembers = 
// getUserList;
[
  { value: 'ocean', label: '장사원'},
  { value: 'blue', label: '김대리'},
  { value: 'purple', label: '이과장'},
  { value: 'red', label: '오차장'},
  { value: 'orange', label: '김부장'},
  { value: 'yellow', label: '김사원2'},
  { value: 'green', label: '이대리2'},
  { value: 'forest', label: '박과장2'},
  { value: 'slate', label: '오차장2'},
  { value: 'silver', label: '김부장2'},
];

let filterMembers = (inputValue: string) => {
  console.log('[filterMembers] inputValue: ', inputValue);
  // return userList.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
  return companyMembers.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (userList) => inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterMembers(inputValue));
      console.log('[promiseOptions] userList: ', userList);
    }, 1000);
  });

class AsyncSelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: this.props.userList
    }
  }

  handleChange = (userList) => (newValue: any, actionMeta: any) => {
      console.group('Value Changed');
      this.setState({
          selectedOption: userList
      });
      if (this.props.actionOnSelectedOption) {
        this.props.actionOnSelectedOption(userList.value);
      }
      console.group('Value Changed');
      console.log(newValue);
      console.log(`action: ${actionMeta.action}`);
      console.groupEnd();
  };

  handleCreate = (promiseOptions) => {
      console.log('promiseOptions', promiseOptions);
      console.log('filterMembers.inputValue1: ', filterMembers.inputValue);
      console.log('멤버 추가');
      filterMembers.inputValue=''
      this.value=''
      console.log('멤버 추가 이벤트 끝');
  }

  render() {
    const { userList } = this.props;

    return (
      <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={7}>
          <AsyncSelect cacheOptions
                       defaultOptions
                       loadOptions={promiseOptions(userList)}
                       styles={{
                        control: (base, state) => ({
                          ...base,
                          borderColor: '#1C90FB',
                        }),
                       }}
                       placeholder="검색"
                       onChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <Button theme="outline"
                  onClick={() => console.log('userList ', userList)}>추가</Button>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default AsyncSelectInput;