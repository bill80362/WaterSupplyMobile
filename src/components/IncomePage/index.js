import React, {Component} from "react";
import {Icon, NavBar,DatePickerView,Flex, WhiteSpace,Picker,PickerView,List, InputItem,Button,Toast} from "antd-mobile";
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
                label: '太平-育賢路彩卷行',
                value: '太平-育賢路彩卷行',
            },
            {
                label: '太平-新興路彩卷行',
                value: '太平-新興路彩卷行',
            },
            {
                label: '大里-XX里活動中心',
                value: '大里-XX里活動中心',
            },
            {
                label: '大里-德芳南路藥局',
                value: '大里-德芳南路藥局',
            },
            {
                label: '北屯-轉角水果攤',
                value: '北屯-轉角水果攤',
            },
            {
                label: '北屯-梅川瀋陽自助洗衣',
                value: '北屯-梅川瀋陽自助洗衣',
            },
            {
                label: '南屯-轉角水果攤',
                value: '南屯-轉角水果攤',
            },
            {
                label: '南屯-梅川瀋陽自助洗衣',
                value: '南屯-梅川瀋陽自助洗衣',
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
                    style={{width: '100%'}}
                >收款輸入</NavBar>
                <div style={{width: '100%'}}>
                    <List>
                    <Picker
                        cols = '1'//好大的坑 默認是3
                        title="請選擇站點"
                        extra="[請點我]選擇站點"
                        data={this.state.data}
                        value={this.state.StationValue}
                        onChange={v => this.setState({ StationValue: v })}
                        onOk={v => this.setState({ StationValue: v })}
                    >
                        <List.Item arrow="horizontal" style={{textAlign:'center'}}>站點:</List.Item>
                    </Picker>
                    <InputItem
                        type={'money'}
                        ref={el => this.inputRef = el}
                        placeholder={'請輸入收款金額'}
                        onBlur={v => this.setState({MoneyValue:v})}
                        moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                    >金額:</InputItem>
                        <div style={{textAlign:'center',fontSize:'18px',margin:5}}>收款時間</div>
                    <List.Item>
                        <DatePickerView
                            mode={'month'}
                            value={this.state.value}
                            onChange={this.onChange}
                            onValueChange={this.onValueChange}
                        />
                    </List.Item>
                    </List>
                    <Button type="primary" inline style={{width:'300px',margin:'5px'}} onClick={()=>(Toast.success('新增成功'))}>新增收款</Button>
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                    <WhiteSpace size="xl" />
                </div>

            </div>
        )
    }
}