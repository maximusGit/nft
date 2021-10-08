import React from 'react';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { Button, Col, Row, Input, Typography } from 'antd';
import { List } from 'react-content-loader';


export const FooterBar = () => {


  const FooterSubscription = ()=>{
    return(
        <div>
        <Typography.Title level={2} style={{textAlign:"center", letterSpacing:"5px"}}><strong>ARTIMAC</strong></Typography.Title>
          <p style={{textIndent: '20px', borderBottom:'1px solid grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam, exercitationem cupiditate veritatis modi natus?</p>
          <h4 style={{textAlign:'center'}}> Subscribe to our newsletter </h4>
          <Row gutter={[8,8]}>
            <Col>
              <Input placeholder="Email Adress"></Input>
            </Col>
            <Col>
              <Button
                  className="action-btn"
                  style={{maxWidth:'100px', maxHeight:'30px', fontSize:'14px'}}
                  >SUBSCRIBE</Button>
            </Col>
          </Row>  
          </div>
      
    )
  }
  const FooterInfo = () =>{
    return(
          <Row gutter={[48,48]}>
            <Col span={8}>
              <ul> 
  
                <li><Typography.Title level={4}><strong>For Artists</strong></Typography.Title></li>
                <li>Submit artist Profile</li>
              </ul>
            </Col>
            <Col span={8}>
            <ul>
            <li><Typography.Title level={4}><strong>Community</strong></Typography.Title></li>
                <li>Submit artist Profile</li>
                <li>Editorial</li>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Blog</li>
                <li>Help center</li>
              </ul>
            </Col>
            <Col span={8}>
            <ul>
            <li><Typography.Title level={4}><strong>Legle</strong></Typography.Title></li>
                <li>Community</li>
                <li>Guidelines</li>
                <li>Terms Of Service</li>
                <li>Privacy Policy</li>
                <li>Report Content</li>
                <li>Blug Bounty</li>
                <li>Program</li>
              </ul>
            </Col>
          </Row>
    )
  }
  return (
    <>
      {/* <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://github.com/metaplex-foundation/metaplex'}
        icon={<GithubOutlined />}
        style={{ marginRight: '20px' }}
      ></Button>
      <Button
        shape={'circle'}
        target={'_blank'}
        href={'https://twitter.com/solana'}
        icon={<TwitterOutlined />}
      ></Button>
      <Button className="btn btn-primary">freffererfref</Button> */}
      <div className="footer">
        <Row gutter={[16,16]} >
          <Col span={8}>
            <FooterSubscription/>
          </Col>
          <Col span={16}>
            <FooterInfo/>
          </Col>
        </Row>
      </div>
    </>
  );
};
