import React from "react"
import styled from "styled-components"

export default function HeroImage() {
  return (
    <Wrapper>
      <div className="mockup1" />
      <div className="mockup2" />
      <div className="mockup3" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position:relative;
    width:667px;
    outline:1px solid white;

    .mockup1 {
    position: absolute;
    width: 90%;
    height: 100%;
    left: 5%;
    top: 5%;

    background:url("/images/images/khloe-arledge-ND3edEmzcdQ-unsplash.svg");
  }
`