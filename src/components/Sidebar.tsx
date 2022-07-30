import styled from 'styled-components'
import React from 'react'

const Sidebar = () => {
  return (
    <SAppSidebar>
        <SAppSidebarHeader>
         <Sh1>ノート</Sh1>
         <SButton>追加</SButton>
        </SAppSidebarHeader>
        <SAppSidebarNotes>
            <SAppSidebarNote>
                <SAppSidebarTitle>
                    <strong>タイトル</strong>
                    <SButton>削除</SButton>
                </SAppSidebarTitle>
                <Sp>ノート内容です</Sp>
                <Ssmall>最後の修正日:XX/XX</Ssmall>
            </SAppSidebarNote>
        </SAppSidebarNotes>
    </SAppSidebar>
  )
}

const SAppSidebar = styled.div`
    width:30%;
    height:100vh;
    border-right:2px solid #ddd;
`

const SAppSidebarHeader = styled.div`
    display:flex;
    justify-content:space-between;
    padding:25px;
`

const SButton = styled.button`
    background:none;
    border:none;
    color:#08c;
    margin:0;
    padding:0;
    font-size:16px;
    cursor:pointer;
`

const Sh1 = styled.h1`
    maragin:0;
`
//スクロールバーが上手く表示されない
const SAppSidebarNotes = styled.div`
    height:calc(100vh - 78px);
    overflow-y: scroll;
`

const SAppSidebarNote = styled.div`
    padding:25px;
    cursor:pointer;
    transition:all 0.3s;
    &:hover{
        background-color:#f1f0f0;
    }
`

const SAppSidebarTitle = styled.div`
    display:flex;
    justify-content:space-between;
`
const Sp = styled.p`
   margin:10px 0;
`

const Ssmall = styled.small`
 color:#999;
`


export default Sidebar;