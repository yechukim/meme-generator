import React, { useState } from 'react'
import styled from '@emotion/styled/macro';
import Button from './Button';
import { getMeme } from '../api/meme';
const Wrapper = styled.div`
  
`
const Input = styled.input`
  display:block;
  text-indent: 4px;
  height:40px;
  width:80%;
  margin: 20px auto;
  border: 1.5px solid #ddd;
  border-radius:4px;
  box-sizing:border-box;
  color:#333;
  outline:none;
  font-size:0.9em;
`
const ImageWrapper = styled.div`
  
`
const Image = styled.img`
  display: block;
  width:80%;
  object-fit:contain;
  background-color:#000;
  height:80%;
  margin:auto;
`
function Meme() {

  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [meme, setMeme] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'top') {

      setTopText(value)
      return
    }
    setBottomText(value)

  }

  const handleClick = async () => {
    const respondedMeme = await getMeme()
    setMeme(() => respondedMeme)
  }

  return (
    <Wrapper>
      <Input
        name='top'
        value={topText}
        onChange={handleChange}
        placeholder='위에 들어갈 문구' />
      <Input
        name='bottom'
        value={bottomText}
        onChange={handleChange}
        placeholder='아래 들어갈 문구' />
      <ImageWrapper>
        <Image src={meme ? meme : null} />
        <Button title='클릭해서 짤 가져오기' onClick={handleClick} />
        <Button title='카카오톡으로 공유하기' kakao />
        <Button title='이미지로 저장하기' />

      </ImageWrapper>
      {/* 이미지 다시 불러오기 버튼  */}

    </Wrapper>
  );
}

export default Meme;
