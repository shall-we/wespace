import React from 'react';
import NoteTemplate from '../components/common/NoteTemplate';
import DirectoryContainer from '../containers/main/DirectoryContainer';
import ContextContainer from '../containers/main/ContextContainer';
import Editor from '../components/main/Editor'
const MainPage = () => {
  
  return (
    <NoteTemplate>
      <div style={{display:'flex'}}>
        <DirectoryContainer/>
        <Editor/>
      </div>
    </NoteTemplate>
  );
};

export default MainPage;