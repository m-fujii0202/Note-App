import React from 'react'
import styled from 'styled-components'

const Main = (props:any) => {
  const {activeNote} = props;
  console.log(props);
  if(!activeNote){
    return <SNoActiveNote>ノートが選択されていません</SNoActiveNote>
  }
  return (
    <SAppMain>
        <SAppMainNoteEdit>
            <Sinput type="text" />
            <Stextarea id="" placeholder='ノート内容を記入'></Stextarea>
        </SAppMainNoteEdit>
        <SAppMainNotePreview>
            <Sh1 preview-title=''>{activeNote.title}</Sh1>
            <SMarkdownPreview>{activeNote.content}</SMarkdownPreview>
        </SAppMainNotePreview>
    </SAppMain>
  )
}

const SAppMain = styled.div`
 width:70%;
 height:100vh;
`

const SAppMainNoteEdit = styled.div`
height:50vh;
padding:25px;
`
//スクロールバーが表示されない
const SAppMainNotePreview = styled.div`
height:50vh;
border-top:3px solid #ddd;
overflow-y:scroll;
background:rgba(0,0,0,0.04);
`

const Sinput = styled.input`
display:block;
border:1px solid #ddd;
margin-bottom:20px;
width:100%;
height:calc(50vh - 130px);
padding:5px;
resize:none;
font-size:2rem;
height:50px;
`
const Stextarea = styled.textarea`
display:block;
border:1px solid #ddd;
margin-bottom:20px;
width:100%;
height:calc(50vh - 130px);
padding:5px;
resize:none;
font-suze:16px;
`
const Sh1 = styled.h1`
 padding:25px 25px 0 25px;
 maragin:0 ;
`
const SMarkdownPreview = styled.div`
 padding:0 25px 25px 25px;
 line-height:2rem;
`

const SNoActiveNote =styled.div`
  width:70%;
  height:100vh;
  line-height:100vh;
  text-align:center;
  font-size:2rem;
  color:#999;
`

export default Main