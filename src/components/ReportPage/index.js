import React, {Component} from "react";
import {Icon, NavBar,List} from "antd-mobile";

export default class extends Component {
    state = {
        NavBarStyle: {display:''},
        Page:'index',
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
                        style={this.state.NavBarStyle}
                    >營收報表</NavBar>

                        {["2019.5","2019.4","2019.3","2019.2","2019.1","2018.12","2018.11","2018.10","2018.09","2018.08","2018.07"].map((v)=> (
                            <List.Item
                                arrow="horizontal"
                                multipleLine
                                onClick={() => {this.GoDetailPage(v)}}
                            >{v}<List.Item.Brief>營收總額:20.3萬元 / 統計站點數:5</List.Item.Brief></List.Item>
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
                    >瀏覽時間【2019.5】</NavBar>
                    {this.state.data.map((v)=> (
                        <List.Item
                            multipleLine
                            // onClick={() => {console.log(v)}}
                            extra={<span onClick={()=>console.log('刪除',v.label)}>刪除</span>}
                            error={true}
                        >站點{v.label}號<List.Item.Brief>收款金額:1000元</List.Item.Brief></List.Item>
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