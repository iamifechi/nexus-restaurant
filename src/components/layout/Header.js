import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const menuData = [
    {title: "Courses",icon:"/images/icons/courses.svg", link:"/courses"},
    {title: "Tutorials",icon:"/images/icons/tutorials.svg", link:"/tutorials"},
    {title: "Pricing",icon:"/images/icons/pricing.svg", link:"/pricing"},
    {title: "",icon:"/images/icons/search.svg", link:"/search"},
    {title: "",icon:"/images/icons/account.svg", link:"/account"},
]
export default function Header(){
    return(
        <Wrapper>
            <img src="/images/logos/logo.svg" alt="logo"/>
            <MenuWrapper>
        {menuData.map((item,index) =>(
            
            <Link to={item.link} key = {index}>
               <MenuItem> <img src={item.icon} alt={item.title} />
                {item.title}
                </MenuItem>
            </Link>
            
        ))}
        </MenuWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    position:absolute;
    top:60px;
    display:grid;
    grid-template-columns:44px auto;
    width:100%;
    justify-content:space-between;
    align-items:center;
    padding:0 30px;
    `

const MenuWrapper = styled.div`
    display:grid;
    /* list-style:none; */
    gap:30px;
    grid-template-columns:repeat(5, auto);
    align-items:center;
    justify-content:center;
`

const MenuItem = styled.div`
    color:rgba(255, 255, 255, 0.7);
    display:grid;
    grid-template-columns:24px auto;
    gap:10px;
    align-items:center;
    padding:10px;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-radius:10px;
    :hover{
        background:rgba(255, 255, 255, 0.1);
        box-shadow:0px 10px 20px rgba(0, 0, 0, 0.1),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
        
    }
`
