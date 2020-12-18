import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import FileDropzone from './components/FileDropzone';
import Playlist from './components/Playlist';
import FileProvider from './contexts/FileContext';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
    return (
        <FileProvider>
            <Layout>
                <Header><FileDropzone /></Header>
            </Layout>
            <Layout>
                <Content>
                    <Row>
                        <Col span={24}><Playlist /></Col>
                    </Row>
                </Content>
                <Footer>Audio Controls</Footer>
            </Layout>
        </FileProvider >
    )
}

export default App;