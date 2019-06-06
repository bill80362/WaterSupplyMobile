import React, {Component} from "react";

import { Button,WingBlank, WhiteSpace,TabBar,NavBar, Icon   } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import IncomePage from "./components/IncomePage"
import StationPage from "./components/StationPage"
import ReportPage from "./components/ReportPage"
import SettingPage from "./components/SettingPage"


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    getPage = (pageText) => {
        switch (pageText) {
            case 'IncomePage':
                return <IncomePage />
            case 'StationPage':
                return <StationPage />
            case 'ReportPage':
                return <ReportPage />
            case 'SettingPage':
                return <SettingPage />
            default:
                return <IncomePage />
        }
    }

    renderContent(pageText) {
        return (
            <div style={{ height: '100%', width: '100%', top: 0,backgroundColor: 'white',textAlign: 'center' }}>
                <div>
                    {this.getPage(pageText)}
                </div>
                <div style={{marginTop: 20,fontSize:'9px'}}>
                    Bill Design©2019
                </div>
            </div>
        );
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="gray"
                    tintColor="red"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="收款輸入"
                        key="key1"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://image.flaticon.com/icons/png/512/61/61584.png) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://image.flaticon.com/icons/png/512/61/61584.png) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        //badge={2}//ICON右上方數字
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('IncomePage')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://image.flaticon.com/icons/png/512/99/99729.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://image.flaticon.com/icons/png/512/99/99729.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="站點查詢"
                        key="Koubei"
                        //badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('StationPage')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://image.flaticon.com/icons/png/512/90/90477.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://image.flaticon.com/icons/png/512/90/90477.png) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="營收報表"
                        key="Friend"
                        // dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        {this.renderContent('ReportPage')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://image.flaticon.com/icons/png/512/31/31056.png' }}
                        selectedIcon={{ uri: 'https://image.flaticon.com/icons/png/512/31/31056.png' }}
                        title="站點設定"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        {this.renderContent('SettingPage')}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
