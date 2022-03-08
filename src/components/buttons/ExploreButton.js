import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { SmallText } from "../styles/TextStyles"

export default function ExploreButton(props) {
  const { title } = props
  return (
    <Link to="/page-2">
      <Wrapper>
        <TextWrapper>
          <Title>{title || "Explore menu"}</Title>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  width:110px;
  min-width:100px;
  max-width:157px;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#DCCA87;

  *, 
  &{
    /* This targets the parent {&} and all children {*} elements */
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover{
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 30px 60px rgba(23, 0, 102, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); 
    transform:translateY(-3px);
  }
`
const Title = styled(SmallText)`
  color: black;
  font-family: Cormorant Upright;
  font-size:12px;
  font-style:normal;
  font-weight:bold;
  text-transform:captalize;
  padding:8px;
`

const TextWrapper = styled.div``

