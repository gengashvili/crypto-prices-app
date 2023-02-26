import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaMoon } from "react-icons/fa";
import { TiAdjustBrightness } from "react-icons/ti";

type HeadingProps = {
    darkMode : boolean
    setDarkMode : React.Dispatch<React.SetStateAction<boolean>>
}

function Header({darkMode, setDarkMode}:HeadingProps) {
  return (
    <Styledheading darkMode = {darkMode}>
      <h1>Crypto Prices App</h1>
      <IconContext.Provider value={{size: '25px'}}>
        {
            darkMode?
            <TiAdjustBrightness fill='#D9D9D9' onClick={()=>setDarkMode(!darkMode)}/>
            :<FaMoon onClick={()=>setDarkMode(!darkMode)}/>
        }
      </IconContext.Provider>
    </Styledheading>
  );
}

type StyledheadingProps = {
    darkMode : boolean
}

const Styledheading = styled.header<StyledheadingProps>`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
      font-size: 22px;
      color: ${({darkMode})=>darkMode?'#D9D9D9':'#111111'};
  }
  svg{
    cursor: pointer;
  }
  @media (min-width: 780px) {
    width: 90%;
  }
  @media (min-width: 1024px) {
        width: 80%;
        margin: auto;
        h1{
          font-size: 35px;
        }
        svg{
          width: 35px;
          height: 35px;
        }
    }
`;


export default Header;
