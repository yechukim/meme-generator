import React from 'react'
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
  :hover{
    cursor:pointer;
  }
  :first-of-type{
    margin-top:30px;
  }

`
function Button({ title, kakao = false, onClick }) {
  return (
    <CustomButton
      onClick={onClick}
      kakao={kakao ? '#FEE500' : '#fff'}>{title}</CustomButton>
  );
}

export default Button;