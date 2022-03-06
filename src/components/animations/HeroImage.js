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
    max-width:667px;
    outline:1px solid white;

    .mockup1 {
    position: absolute;
    z-index:1;
    width: 320px;
    height: 100%;
    background:url("/images/images/khloe-arledge-ND3edEmzcdQ-unsplash.svg");
    background-repeat:no-repeat;
    background-size:contain;
  }

  .mockup2{
    position:absolute;
    top:0;
    right:0;
    z-index:0;
    width:235px;
    height:235px;
    background:#DCCA87;
  }
  .mockup3{
    position:absolute;
    bottom:0;
    left:0;
    z-index:0;
    width:235px;
    height:235px;
    background:#DCCA87;
  }

`