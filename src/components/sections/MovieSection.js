import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"

function MovieSection() {
  return (
    <Section>
      <Wrapper>
          <Title>Continue Watching</Title>
        <MovieGallery>
          
          <MovieCard></MovieCard>
          <MovieCard></MovieCard>
        </MovieGallery>
      </Wrapper>
      
    </Section>
  )
}

export default MovieSection

const Section = styled.section`
  max-width: 1234px;
  margin: 150px auto;
  position: relative;
  overflow:hidden;
`

const Wrapper = styled.div`
  max-width: 80%;
  margin: auto;
`
const MovieGallery = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns:450px auto;
  gap:20px;
`
const MovieCard = styled.div`
  border-radius: 10px;
  width: 450px;
  height: 280px;
  background: white;
`

const Title = styled.h2`
  color: white;
  padding: 15px 0;
  font-weight: 600;
`
