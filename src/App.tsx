import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import uuid from 'react-uuid';

export type NewNoteType = {
  content: string;
  id: string;
  modDate: number;
  title: string;
}

function App() {
 const [notes, setNotes] = useState<NewNoteType[]>([]);

const onAddName = ()=>{
  // console.log("ノートの追加");
  const newNote = {
   id: uuid(),
   title:"新しいノート",
   content:"新しいノートの内容",
   modDate:Date.now(),
  };
  //既存のノートに新しいノートを加える処理
  setNotes([...notes,newNote]);
  console.log(notes);
};

const onDeleteNote =(id: string)=>{
  const filterNotes = notes.filter((note) =>note.id !== id);
  setNotes(filterNotes);
}

  return (
    <div className="App">
      <Sidebar onAddName={onAddName} notes={notes} onDeleteNote={onDeleteNote}/>
      <Main />
     
    </div>
  )
}

export default App
