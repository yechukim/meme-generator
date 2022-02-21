import React, { useState } from 'react'
import styled from '@emotion/styled/macro';
import Button from './Button';
import { getMeme } from '../api/meme';
import { saveAs } from 'file-saver';
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
  position:relative;
  padding:10px;
  margin: 80px auto;
  background-color:#000;
`
const Image = styled.img`
  display: block;
  width:100%;
  object-fit:contain;
  height:80%;
  margin:auto;
`

const TopText = styled.h1`
  position:absolute;
  text-align:center;
  top:-45px;
  left:0;
  right:0;
  margin:auto;
  color: #fff;
  font-size:3em;
  font-weight: 900;
  background-color:#000;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

`
const BottomText = styled.h1`
  position:absolute;
  text-align:center;
  bottom:-50px;
  left:0;
  right:0;
  margin:auto;
  font-size:3em;
  color: #fff;
  font-weight: 900;
  font-weight: 900;
  background-color:#000;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  `
function Meme() {

  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [meme, setMeme] = useState(null)

  const captured = document.getElementById('meme')
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

  const saveMeme = () => {
    // domtoimage.toPng(captured)
    // .then(blob => window.saveAs(blob), 'myMeme.png')

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
      <ImageWrapper className='meme'>
        <Image src={meme ? meme : null} />
        <TopText>{topText}</TopText>
        <BottomText>{bottomText}</BottomText>

      </ImageWrapper>
      <Button title='클릭해서 짤 가져오기' onClick={handleClick} />
        <Button title='카카오톡으로 공유하기' kakao />
      <Button title='이미지로 저장하기' onClick={saveMeme} />

    </Wrapper>
  );
}

export default Meme;
