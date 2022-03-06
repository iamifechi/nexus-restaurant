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
    height:100%;
    width:435px;
    /* width:50%; */
    outline:1px solid white;

    .mockup1 {
    position: absolute;
    z-index:1;
    width: 80%;
    height: 100%;
    background:url("/images/images/khloe-arledge-ND3edEmzcdQ-unsplash.svg") no-repeat;
  }

  .mockup2{
    position:absolute;
    top:0;
    right:0;
    z-index:0;
    width:435px;
    height:435px;
    background:#DCCA87;
  }
  .mockup3{
    position:absolute;
    bottom:0;
    left:0;
    z-index:0;
    width:435px;
    height:435px;
    background:#DCCA87;
  }

`