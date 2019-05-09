import React from 'react';
import DirectoryTemplate from '../components/directory/DirectoryTemplate';
import Header from '../components/common/Header';
import DirectoryPane from '../components/directory/DirectoryPane';
import NotePane from '../components/directory/NotePane';
import Editor from '../components/directory/Editor';
const DirectoryPage = () => {
  return (
    <DirectoryTemplate
    header={<Header/>}
    directory={<DirectoryPane/>}
    note={<Editor/>}
  />
  );
};

export default DirectoryPage;