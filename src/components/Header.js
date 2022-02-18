import React from 'react'
import styled from '@emotion/styled/macro'

const Wrapper = styled.div`
  background-color:#000;
  height:56px;
  display:flex;
  align-items:center;
  justify-content:center;

`
const Title = styled.h1`
  color:#fff;
  font-family: 'Jua', sans-serif;
  font-size:1.5em;
  
`
function Header() {
  return (
    <Wrapper>
      <Title>짤 생성기 😎</Title>

    </Wrapper>
  );
}

export default Header;