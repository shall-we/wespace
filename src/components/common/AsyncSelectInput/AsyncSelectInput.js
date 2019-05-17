import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { companyMembers } from 'styles/data';
import Button from "components/common/Button";
import Grid from '@material-ui/core/Grid';

let filterColors = (inputValue: string) => {
  console.log('[filterColors] inputValue: ', inputValue);
  return companyMembers.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
      console.log('[promiseOptions] inputValue: ', inputValue);
    }, 1000);
  });

class AsyncSelectInput extends React.Component {
  //
  state = {
    member: ''
  }

  handleChange = () => (newValue: any, actionMeta: any) => {
      console.group('Value Changed');
      console.log(newValue);
      console.log(`action: ${actionMeta.action}`);
      console.groupEnd();
  };

  render() {
    return (
      <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={7}>
          <AsyncSelect cacheOptions
                       defaultOptions
                       loadOptions={promiseOptions}
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
                  onClick={() => {
                    console.log('멤버 추가');
                    filterColors.inputValue=''
                    this.value=''
                    console.log('멤버 추가 이벤트 끝');
          }}>추가</Button>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default AsyncSelectInput;
