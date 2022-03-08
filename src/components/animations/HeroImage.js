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
  position: relative;
  height: 100%;
  max-width: 667px;



  .mockup1 {
    position: relative;
    display: block;
    top: -10px;
    width: 440px;
    height: 480px;
    background: url("/images/images/khloe-arledge-ND3edEmzcdQ-unsplash.png");
    background-repeat: no-repeat;
    background-size: cover;

    &:before {
      position: absolute;
      content: "";
      /* top: -4%;
      right: -4%; */
      top: -16px;
      right: -16px;
      z-index: -1;
      width: 310px;
      height: 310px;
      background: #dcca87;
    }
    &:after {
      position: absolute;
      content: "";
      /* top: 35%;
      left: -4%; */
      top: 187px;
      left: -16px;
      z-index: -1;
      width: 310px;
      height: 310px;
      background: #dcca87;
    }
  }

 
`
