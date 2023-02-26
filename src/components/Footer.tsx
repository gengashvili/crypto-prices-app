import React from 'react'
import styled from 'styled-components'
import { AiOutlineCopyrightCircle } from "react-icons/ai";

type FooterProps = {
    darkMode: boolean
}
function Footer({darkMode}:FooterProps) {
  return (
    <StyledFooter darkMode={darkMode}>
        <AiOutlineCopyrightCircle/>Api From CoinGecko
    </StyledFooter>
  )
}

const StyledFooter = styled.footer<FooterProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 30px;
    color: ${({darkMode})=>darkMode?'#ffffff':'#000000'};
    @media (min-width: 1024px) {
        font-size: 30px
    }
`

export default Footer