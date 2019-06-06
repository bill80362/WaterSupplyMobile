import React, {Component} from "react";
import {Icon, NavBar,List} from "antd-mobile";

export default class extends Component {
    state = {
        // NavBarStyle: {display:''}
        Page:'index'
    }

    GoDetailPage(data){
        console.log(data)
        this.setState({Page:'detail'})
    }

    IndexRender(){
        if(this.state.Page=='index'){
            return(
                <List>
                    <NavBar
                        mode="dark"
                        // icon={<Icon type="left" />}
                        onLeftClick={() => console.log('onLeftClick')}
                        // rightContent={<Icon type="ellipsis" />}
                        // style={this.state.NavBarStyle}
                    >站點查詢</NavBar>
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((v)=> (
                            <List.Item
                                arrow="horizontal"
                                multipleLine
                                onClick={() => {this.GoDetailPage(v)}}
                            >站點3號<List.Item.Brief>近期收款:2019.8 金額:2000元</List.Item.Brief></List.Item>
                        ))}
                </List>
            )
        }else if(this.state.Page=='detail'){
            return(
                <List>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.setState({Page:'index'})}
                        // rightContent={<Icon type="ellipsis" />}
                        // style={this.state.NavBarStyle}
                    >站點3號</NavBar>
                    {["2019.5","2019.4","2019.3","2019.2","2019.1","2018.12","2018.11","2018.10","2018.09","2018.08","2018.07"].map((v)=> (
                        <List.Item
                            multipleLine
                            // onClick={() => {console.log(v)}}
                            extra={<span onClick={()=>console.log('刪除',v)}>刪除</span>}
                            error={true}
                        >{v}<List.Item.Brief>營收總額:20.3萬元</List.Item.Brief></List.Item>
                    ))}
                </List>
            )
        }

    }

    render() {
        return (
            <div>{this.IndexRender(this.state.Page)}</div>
        )
    }
}