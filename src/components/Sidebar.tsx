import styled from 'styled-components'
import React from 'react'
import { type } from 'os';
import { NewNoteType } from '../types/types'

type PropsType = {
    onAddName:() => void;
    notes:NewNoteType[];
    onDeleteNote:(id: string) => void;
    setActiveNote:React.Dispatch<React.SetStateAction<boolean | NewNoteType>>;
    activeNote: boolean | NewNoteType;
}

const Sidebar = (props:any) => {
    const {onAddName, notes, onDeleteNote, setActiveNote, activeNote} = props;
    // console.log("props");
    // console.log(props);
    
    //ノートをソートする機能
    const srotedNotes = notes.sort((a: { modDate: number; },b: { modDate: number; })=>b.modDate - a.modDate);

  return (
    <SAppSidebar>
        
        <SAppSidebarHeader>
         <Sh1>ノート</Sh1>
         <SButton onClick={onAddName}>追加</SButton>
        </SAppSidebarHeader>

        <SAppSidebarNotes>
            {srotedNotes.map((note:any)=>(
                <SAppSidebarNote 
                //選択されたノートがハイライトされる機能
                 className={note.id === activeNote ? 'active':""}
                 key={note.id}
                 onClick={()=>setActiveNote(note.id)}
                 >
                    <SAppSidebarTitle>
                        <strong>{note.title}</strong>
                        <SButton onClick={()=>onDeleteNote(note.id)}>削除</SButton>
                    </SAppSidebarTitle>
                    <Sp>{note.content}</Sp>
                    <Ssmall>{new Date(note.modDate).toLocaleDateString("ja-JP",{
                        hour:"2-digit",
                        minute:"2-digit",
                    })}</Ssmall>
                </SAppSidebarNote>
                ))}
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
    overflow-y:scroll;
`

const SAppSidebarNote = styled.div`
    padding:25px;
    cursor:pointer;
    transition:all 0.3s;
    &:hover{
        background-color:#f1f0f0;
    }
    &.active{
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