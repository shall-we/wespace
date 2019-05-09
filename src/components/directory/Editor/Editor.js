import React from 'react';
import classNames from 'classnames/bind';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import styles from './Editor.scss';


const cx = classNames.bind(styles);
 
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
    console.log('html::',html);
  }

  render() {
    return (
      <div className={cx('editor-main')}>
        <ReactQuill 
        theme='snow'
        onChange= {this.handleChange}
        value= {this.state.editorHtml}
        onKeyDown={(e)=>{
          console.log('onKeyDown',e.keyCode);
        }}
        modules= {Editor.modules}
        formats= {Editor.formats}
        bounds= '.editor-main'
        placeholder= {this.props.placeholder}
        />
      </div>
    );
  }
}







Editor.modules = {
  toolbar: [
  [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
  [{ size: [] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' },
  { 'indent': '-1' }, { 'indent': '+1' }],
  ['link', 'image', 'video'],
  ['clean']
],
 
  clipboard: {matchVisual: false }
 };
Editor.formats = [
'header', 'font', 'size',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image', 'video'];


 
export default Editor;