import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    color: #fff;
    position: relative;
    top: 0;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    background: linear-gradient( 135deg, #4C83FF 10%, #2ABAAF 100%);
    z-index: 10;
    padding: 0 30px;
    font-size: 20px;
`;

function TopBar() {
    return (
        <Bar>
          공적 마스크 조회
        </Bar>
    )
};

export default TopBar;