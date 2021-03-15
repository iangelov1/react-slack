import React from 'react';

import styled from 'styled-components';

import { Avatar } from '@material-ui/core';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar 
                    
                />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />

                <input  placeholder = "Search PAPAFAM" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    height: 50px;
    align-items: center; 
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: #fff;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div` 
    flex: 0.4;
    display: flex;
    padding: 0 50px;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    color: gray;
    border: 1px solid gray

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 730vw;
        outline: 0;
        color: white;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px; 
    }
`;