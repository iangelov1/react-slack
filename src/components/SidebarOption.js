import React from 'react';

import styled from 'styled-components';


const SidebarOption = ({ Icon, title }) => {
    return (
        <SidebarOptionContainer>
            {Icon && <Icon font-size="small" style={{ padding: '10px' }} /> }
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )
            
            }
        </SidebarOptionContainer>
    )
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px
`;

const SidebarOptionChannel = styled.div``;
