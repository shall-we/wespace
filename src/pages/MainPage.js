import React from 'react';
import NoteTemplate from '../components/common/NoteTemplate';
import DirectoryContainer from '../containers/main/DirectoryContainer';

const MainPage = () => {
  
  return (
    <NoteTemplate>
      <DirectoryContainer/>
    </NoteTemplate>
  );
};

export default MainPage;