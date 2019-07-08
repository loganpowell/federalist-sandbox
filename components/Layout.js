import { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb, Icon, PageHeader } from 'antd';
import Head from 'next/Head'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const Collapser = (props) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = () => setCollapsed(!collapsed)
  return (
    <div className="container">
       <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
        }
      `}</style>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Merriweather|Roboto+Mono|Source+Sans+Pro&display=swap" rel="stylesheet"/>
      </Head>
      <Layout style={{ minHeight: '100vh' }} hasSider={true}>
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapse} style={{fontFamily: "Merriweather" }}>
          <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
            <Menu.Item key="0" style={{ margin: 0 }}> {/*style={{ minHeight: 64, margin: 0, padding: 10}} >*/}
              <Icon type="home"/> {/*style={{ paddingTop: 15}} />*/}
              <span>LUCA</span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="form" />
              <span>File An Appeal</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bank" />
              <span>The Law</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="question" />
              <span>FAQ</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="mail" />
              <span>Contact Info</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="paper-clip" />
              <span>Resources</span>
            </Menu.Item>
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="6">Tom</Menu.Item>
              <Menu.Item key="7">Bill</Menu.Item>
              <Menu.Item key="8">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="9">Team 1</Menu.Item>
              <Menu.Item key="10">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="11">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <PageHeader title="Luca Appeals Website" breadcrumb={{ routes }} />
          {/* <Header style={{ background: '#fff', padding: 0 }}>
            Something here
          </Header> */}
          <Content style={{ margin: 16 }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>What You Need To Know</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{ padding: 10, background: '#fff', minHeight: '100%'}}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>LUCA Appeals Website</Footer>
        </Layout>
      </Layout>
    </div>
  );
}



export default Collapser