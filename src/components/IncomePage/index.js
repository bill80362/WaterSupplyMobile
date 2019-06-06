import React, {Component} from "react";
import {Icon, NavBar,DatePickerView,Flex, WhiteSpace,Picker,PickerView,List, InputItem,Button} from "antd-mobile";
import enUS from 'antd-mobile/lib/locale-provider/en_US';
// 通过自定义 moneyKeyboardWrapProps 修复虚拟键盘滚动穿透问题
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

export default class extends Component {
    state = {
        NavBarStyle: {display:''},
        value: new Date(),
        data : [
            {
                label: '站點1號',
                value: '站點1號',
            },
            {
                label: '站點2號',
                value: '站點2號',
            },
            {
                label: '站點3號',
                value: '站點3號',
            },
            {
                label: '站點4號',
                value: '站點4號',
            },
            {
                label: '站點5號',
                value: '站點5號',
            },
            {
                label: '站點6號',
                value: '站點6號',
            },
        ],
        StationValue:"",
        MoneyValue:0,

    }
    onChange = (value) => {
        console.log('onChange',value);
        this.setState({ value });
    };
    onValueChange = (...args) => {
        console.log('onValueChange',args);
    };
    render() {
        return (
            <div style={{height: '100%', width: '100%',}}>
                <NavBar
                    mode="dark"
                    //icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    //rightContent={<Icon type="ellipsis" />}
                    style={{position: 'fixed',width: '100%',}}
                >收款輸入</NavBar>
                <div style={{paddingTop:45,width: '100%'}}>
                    <List>
                        <List.Item>
                        <DatePickerView
                            mode={'month'}
                            value={this.state.value}
                            onChange={this.onChange}
                            onValueChange={this.onValueChange}
                        />
                        </List.Item>
                    <Picker
                        title="請選擇站點"
                        extra="[請點我]選擇站點"
                        data={this.state.data}
                        value={this.state.StationValue}
                        onChange={v => this.setState({ StationValue: v })}
                        onOk={v => this.setState({ StationValue: v })}
                    >
                        <List.Item arrow="horizontal">站點:</List.Item>
                    </Picker>
                    <InputItem
                        type={'money'}
                        ref={el => this.inputRef = el}
                        placeholder={'請輸入收款金額'}
                        onBlur={v => this.setState({MoneyValue:v})}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >金額:</InputItem>
                    </List>
                    <Button type="primary" inline style={{width:'300px',margin:'5px'}}>新增收款</Button>
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                </div>

            </div>
        )
    }
}