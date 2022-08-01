import { type } from "os";
import React from "react";
import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type ActiveNoteType = {
  activeNote: {
    content: string;
    id: string;
    modDate: number;
    title: string;
  } | null;
};
type NewNoteType = {
  content?: string | null;
  id?: string | boolean | null;
  modDate?: number | null;
  title?: string | null;
};

type PropsType = {
  activeNote: NewNoteType | null;
  onUpdateNote: { name: string };
};

const Main = (props: any) => {
  const { activeNote, onUpdateNote } = props;
  console.log("props");
  console.log(props);

  const onEditNote = (key: string, value: string) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });
  };

  if (!activeNote) {
    return <SNoActiveNote>ノートが選択されていません</SNoActiveNote>;
  }

  return (
    <SAppMain>
      <SAppMainNoteEdit>
        <Sinput
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <Stextarea
          id="content"
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        ></Stextarea>
      </SAppMainNoteEdit>
      <SAppMainNotePreview>
        <Sh1 preview-title="">{activeNote.title}</Sh1>
        <SMarkdownPreview>{activeNote.content}</SMarkdownPreview>
      </SAppMainNotePreview>
    </SAppMain>
  );
};

const SAppMain = styled.div`
  width: 70%;
  height: 100vh;
`;

const SAppMainNoteEdit = styled.div`
  height: 50vh;
  padding: 25px;
`;
//スクロールバーが表示されない
const SAppMainNotePreview = styled.div`
  height: 50vh;
  border-top: 3px solid #ddd;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.04);
`;

const Sinput = styled.input`
  display: block;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: 100%;
  height: calc(50vh - 130px);
  padding: 5px;
  resize: none;
  font-size: 2rem;
  height: 50px;
`;
const Stextarea = styled.textarea`
  display: block;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  width: 100%;
  height: calc(50vh - 130px);
  padding: 5px;
  resize: none;
  font-suze: 16px;
`;
const Sh1 = styled.h1`
  padding: 25px 25px 0 25px;
  maragin: 0;
`;
const SMarkdownPreview = styled(ReactMarkdown)`
  padding: 0 25px 25px 25px;
  line-height: 2rem;
`;

const SNoActiveNote = styled.div`
  width: 70%;
  height: 100vh;
  line-height: 100vh;
  text-align: center;
  font-size: 2rem;
  color: #999;
`;

export default Main;
