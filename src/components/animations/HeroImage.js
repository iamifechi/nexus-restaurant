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
outline:5px solid green;
    .mockup1 {
    position: absolute;
    z-index:1;
    top:-35px;
    width: 445px;
    height: 500px;
    background:url("/images/images/khloe-arledge-ND3edEmzcdQ-unsplash.png");
    background-repeat:no-repeat;
    background-size:cover;
  }

  .mockup2{
    position:absolute;
    top:-15%;
    left:-2%;
    z-index:0;
    width:330px;
    height:330px;
    background:#DCCA87;
  }
  .mockup3{
    position:absolute;
    top:40%;
    left:-3%;
    z-index:0;
    width:330px;
    height:330px;
    background:#DCCA87;
  }

`