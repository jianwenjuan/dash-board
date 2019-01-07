import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';


const { SubMenu } = Menu;


const SiderMenus = (match) => (
    <div style={{ paddingBottom: '120px' }}>
        <Menu theme="dark" defaultSelectedKeys={[match.url]} selectedKeys={[match.url]} defaultOpenKeys={['sub4']} mode="inline">
            <Menu.Item key="/">
                <Link to="/">
                    <Icon type="home" />
                    <span>首页</span>
                </Link>
            </Menu.Item>
            <SubMenu
                key="sub1"
                title={<span><Icon type="switcher" /><span>表格</span></span>}

            >
                <Menu.Item key="/tables"><Link to="/tables">简单表格</Link></Menu.Item>
                <Menu.Item key="/asyc-tables"><Link to="/asyc-tables">简单异步表格</Link></Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={<span><Icon type="switcher" /><span>个人中心</span></span>}

            >
                <Menu.Item key="/profile"><Link to="/profile">个人信息</Link></Menu.Item>
              
            </SubMenu>
        </Menu>



    </div >
)

export default SiderMenus;

