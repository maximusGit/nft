import React from 'react';
import { Layout } from 'antd';

import { LABELS } from '../../constants';
import { AppBar } from '../AppBar';
import useWindowDimensions from '../../utils/layout';
import { FooterBar } from '../Footer';

const { Header, Content, Footer } = Layout;

const paddingForLayout = (width: number) => {
  if (width <= 768) return '5px 10px';
  if (width > 768) return '10px 30px';
};

export const AppLayout = React.memo((props: any) => {
  const { width } = useWindowDimensions();

  return (
    <>
      <Layout
        title={LABELS.APP_TITLE}
        style={{
          padding: paddingForLayout(width),
          maxWidth:1000,
        }}
      >
        <Header className="App-Bar">
          <AppBar />
        </Header>
        <Content style={{ overflow: 'scroll', paddingBottom: 50}}>
          {props.children}
        </Content>
        <Footer>
          <FooterBar/>
        </Footer>
      </Layout>
    </>
  );
});
