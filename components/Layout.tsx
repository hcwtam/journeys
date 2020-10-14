import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Container = styled.div`
  background-color: black;//#dedddd;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f5f5f7;
`;

const Footer = styled.footer`
width: 100%;
padding-top: 30px;
font-size: 15px;
height: 80px;
text-align: center;
background-color: black;
color: #aaaaaa;
`

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar/>
    <Container>{children}</Container>
    <Footer>© 2020 Wesley Tam. All rights reserved.</Footer>
  </>
);

export default Layout;
