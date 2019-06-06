import React, {Component} from "react";
import {Button, Icon, InputItem, List, NavBar,WhiteSpace} from "antd-mobile";

export default class extends Component {
    state = {
        NavBarStyle: {display:''}
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    // icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    // rightContent={<Icon type="ellipsis" />}
                    style={this.state.NavBarStyle}
                >站點設定</NavBar>
                <WhiteSpace size="lg" />
                <InputItem
                    type={'text'}
                    ref={el => this.inputRef = el}
                    placeholder={'請輸入站點名稱'}
                    onBlur={v => this.setState({MoneyValue:v})}
                >站點名稱:</InputItem>
                <Button type="primary" inline style={{width:'300px',margin:'5px'}}>新增站點</Button>
            </div>
        )
    }
}