import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled/macro';

const CustomButton = styled.button`
  display:block;
  height:40px;
  font-size:1em;
  font-family: 'Jua', sans-serif;
  border-radius:20px;
  padding:5px 20px;
  background-color: ${({ kakao }) => kakao};
  width:50%;
  margin: 10px auto;
  border:2.5px solid #333;
  transition: all .4s; 
  :hover{
    cursor:pointer;
  }
  :first-of-type{
    margin-top:30px;
  }

`
function Button({ title, kakao = false, onClick }) {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  //새 짤가져올때 레인보우 스프링클 뿌려야지
  const handleMouseMove = (e) => {
    const x = e.clientX
    const y = e.clientY

    setX(() => x)
    setY(() => y)
  }

  useEffect(() => {
    // console.log(x, y)

  }, [x, y])


  return (
    <CustomButton
      onMouseMove={handleMouseMove}
      onClick={onClick}
      kakao={kakao ? '#FEE500' : '#fff'}>{title}</CustomButton>
  );
}

export default Button;