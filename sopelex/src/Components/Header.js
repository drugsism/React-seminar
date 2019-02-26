import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 50px;
    height: 50px;
    text-align: center;
    border-bottom: 2px solid ${props => (props.current ? "#3498db" : "transparent")};
    transition: 0.3s ease-in-out;
`;

const MenuLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <MenuLink to="/">Main</MenuLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <MenuLink to="/tv">Content</MenuLink>
            </Item>
            <Item current={pathname === "/search"}>
                <MenuLink to="/search">Search</MenuLink>
            </Item>
        </List>
    </Header>
));
