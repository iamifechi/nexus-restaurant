import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { menuData } from "../../data/menuData"

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link to="/"> Gerícht</Link>
      </Logo>
      <MenuWrapper>
        {console.log("Herrrreeeeee", menuData)}
        {menuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem> {item.title}</MenuItem>
          </Link>
        ))}
      </MenuWrapper>

      <LoginWrapper>
        <Link to="/login"> Log in </Link>
        <span>/</span>
        <Link to="/login"> Registeration </Link>
      </LoginWrapper>
    </Wrapper>
  )
}

const Logo = styled.header`
  width: 199px;
  height: 57px;
  font-family: Cormorant Upright;
  font-style: normal;
  font-weight: bold;
  font-size: calc(100% + 13px);
  line-height: 130%;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
`
const Wrapper = styled.nav`
  position: absolute;
  z-index: 1;
  top: 1.2em;
  display: grid;
  grid-template-columns: 199px auto auto;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 70px;
  a {
    color: #ffffff;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-content: center;
  a {
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    color: #ffffff;
  }
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`

const LoginWrapper = styled.div`
  a {
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    padding: 10px;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-radius: 10px;
    :hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    }
  }
`
