import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background: #eee;
    z-index: 10;
    justify-content: center;
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    max-width: 160px;
    min-width: 80px;
    height: 60px;
    text-align: center;
`;

const MaskLink = styled(Link)`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => (props.current ? "#448aff" : "#666")};
    text-decoration: none;
`;

export default withRouter(( {location: { pathname } }) => (
    <Header>
      <List>
        <Item>
          <MaskLink current={pathname === "/"} to="/">내 주변 찾기</MaskLink>
        </Item>
        <Item>
          <MaskLink current={pathname === "/list"} to="/list">리스트</MaskLink>
        </Item>
        <Item>
          <MaskLink current={pathname === "/about"} to="/about">About</MaskLink>
        </Item>
      </List>
    </Header>
  )
);