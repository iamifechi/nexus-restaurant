import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import ExploreButton from "../buttons/ExploreButton"
// import MockupAnimation from "../animations/MockupAninmations"
import HeroImage from "../animations/HeroImage"

function Hero() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <Subtitle>
              Chase the new Flavour
              {/* <br /> */}
              <img src="/images/icons/vectorRight.svg" alt="vector" />
            </Subtitle>
            The key to
            <br />
            Fine dining
          </Title>
          <Description>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </Description>
          <ExploreButton title="Explore Menu" />
        </TextWrapper>

        <HeroImage />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 150px 0px 0px;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1300px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 0px 12% 0px;

  @media (max-width: 768px) {
    max-width: 768px;
    grid-template-columns: 1fr;
    gap: 100px;
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 30px;
  min-width: 335px;
  max-width: 435px;
`

const Title = styled(H1)`
  font-family: Cormorant Upright;
  font-size: calc(100% + 46px);
  font-style: normal;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${themes.dark.text3};
  /* margin:8px 0px 0px; */
`

const Subtitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.04em;
  color: #ffffff;
  max-width: 163px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 100%;

  img {
    width: 27px;
    height: 24px;
    color: #dcca87;
  }
`

const Description = styled(MediumText)`
  font-style: normal;
  max-width: 360px;
  font-size: 12px;
  color: #aaaaaa;
  letter-spacing: 0.04em;
`
