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

      <SecondaryWrapper>
        <div class="login">
          <Link to="/login"> Log in </Link>
          <span>/</span>
          <Link to="/register"> Registration </Link>
        </div>
        <div><Link to="/book"> Book Table </Link></div>
        
      </SecondaryWrapper>
      
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: absolute;
  z-index: 1;
  top: 1.4em;
  display: grid;
  grid-template-columns: 366px auto auto;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 3.9%;
  a {
    color: #ffffff;
  }
`
const Logo = styled.header`
  width: 199px;
  height: 57px;
  font-family: Cormorant Upright;
  font-style: normal;
  font-weight: bold;
  font-size: calc(100% + 14px);
  line-height: 130%;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
`
const MenuWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, auto);
  align-items: flex-start;
  justify-content: center;

  a {
    font-size: 11px;
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

const SecondaryWrapper = styled.div`
  padding:0px;
  position:relative;
  font-size: 11px;
  font-weight: normal;
  font-style: normal;
  letter-spacing:0.05em;
  display:flex;
  justify-content:space-between;
  align-items:center;
  /* max-width:364px; */


  div{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0px 40px;
    /* margin:0px 20px; */
    span{
      color:#ffffff;
    }
  }

  .login {
    position:relative;
        &:after{
        position:absolute;
        content:"";
        top:5px;
        left:100%;
        height:30px;
        width:1px;
        background: radial-gradient(50% 50% at 50% 50%, #FFFFFF 58.85%, rgba(255, 255, 255, 0) 100%);
      }
    }
  a {
    padding: 10px 4px;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-radius: 10px;
    :hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    }
  }
  span {
    display:flex;
  }

`
