import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"
// import MockupAnimation from "../animations/MockupAninmations"
import HeroImage from "../animations/HeroImage"

function Hero() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
          The key to<br />
          Fine dining
          </Title>
          <Description>
          Sit tellus lobortis sed senectus vivamus molestie. 
          Condimentum volutpat morbi facilisis quam scelerisque sapien.
          Et, penatibus aliquam amet tellus
          </Description>
          <PurchaseButton
            title="Start learning"
            subtitle="120+ hours of video"
          />
        </TextWrapper>

        <HeroImage />
        {/* <MockupAnimation /> */}
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
   */
  background:transparent;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width:1300px;
  display: grid;
  grid-template-columns: 453px auto;
  padding:169px 120px;

`
const TextWrapper = styled.div`
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  font-family: Cormorant Upright;
  font-size:85px;
  font-style: normal;
  line-height: 130%;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: ${themes.dark.text3};
`

const Description = styled(MediumText)`
  color: #AAAAAA;
`
