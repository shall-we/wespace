import React from 'react';
import classNames from 'classnames/bind';

import ReactQuill,{Quill}from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import 'react-quill/dist/quill.bubble.css'; 
import styles from './Editor.scss';
import UserList from 'components/main/UserList';

import QuillCursors from '../Cursors';
import ReconnectingWebSocket from 'reconnectingwebsocket';

const cursors = require('./cursors' );
const ShareDB = require('sharedb/lib/client');

ShareDB.types.register(require('rich-text').type);
Quill.register('modules/cursors', QuillCursors);
const shareDBSocket = new ReconnectingWebSocket(((window.location.protocol === 'https:') ? 'wss' : 'ws') + '://' + window.location.hostname + ':4000/sharedb');

const shareDBConnection = new ShareDB.Connection(shareDBSocket);




//--------------------------------------------------------------------------------------------------------------------------------------
const cx = classNames.bind(styles);
 
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.reactQuillRef=null;
    this.state={
      users:[]
    }
  }


  componentDidMount(){
    
    const doc = shareDBConnection.get('documents', this.props.note);
    const quillRef=this.reactQuillRef.getEditor();
    const cursorsModule = quillRef.getModule('cursors');


    const uuid=this.props.note;
    const updateUserList=()=>{
      let user=[];
      cursors.connections.forEach(function(connection) {
        if(connection.uuid===uuid)
       user.push({id: 2, title:connection.name, content: connection.color, imgUrl: connection.profile})
      });
      this.setState({users:user});
    }

    doc.subscribe(function(err) {
      if (err) throw err;
      if (!doc.type)
        doc.create([{
          insert: '\n'
        }], 'rich-text');
    
      // update editor contents
      quillRef.setContents(doc.data);
    
      // local -> server
      quillRef.on('text-change', function(delta, oldDelta, source) {
        if (source === 'user') {
    
          // Check if it's a formatting-only delta
          var formattingDelta = delta.reduce(function (check, op) {
            return (op.insert || op.delete) ? false : check;
          }, true);
    
          // If it's not a formatting-only delta, collapse local selection
          if (
            !formattingDelta &&
            cursors.localConnection.range &&
            cursors.localConnection.range.length
          ) {
            cursors.localConnection.range.index += cursors.localConnection.range.length;
            cursors.localConnection.range.length = 0;
            cursors.update();
          }
    
          doc.submitOp(delta, {
            source: quillRef
          }, function(err) {
            if (err)
              console.error('Submit OP returned an error:', err);
          });
          updateUserList();

        }


      });
    
      cursorsModule.registerTextChangeListener();
      // server -> local
      doc.on('op', function(op, source) {
        if (source !== quillRef) {
          quillRef.updateContents(op);
          updateUserList();
        }
      });
    
      //
      function sendCursorData(range) {
        cursors.localConnection.range = range;
        cursors.update();
      }
    
      //
      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this,
            args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };
      
      var debouncedSendCursorData = debounce(function() {
        var range = quillRef.getSelection();
    
        if (range) {
          console.log('[cursors] Stopped typing, sending a cursor update/refresh.');
          sendCursorData(range);
        }
      }, 1500);
    
      doc.on('nothing pending', debouncedSendCursorData);
    
      function updateCursors(source) {
        var activeConnections = {},
          updateAll = Object.keys(cursorsModule.cursors).length === 0;
    
        cursors.connections.forEach(function(connection) {
          if (connection.id !== cursors.localConnection.id) {
    
            if(connection.uuid ===cursors.localConnection.uuid){

            // Update cursor that sent the update, source (or update all if we're initting)
            if ((connection.id === source.id || updateAll) && connection.range) {
              cursorsModule.setCursor(
                connection.id,
                connection.range,
                connection.name,
                connection.color
              );
            }
    
            // Add to active connections hashtable
            activeConnections[connection.id] = connection;
            }
          }
        });
    
        // Clear 'disconnected' cursors
        Object.keys(cursorsModule.cursors).forEach(function(cursorId) {
          if (!activeConnections[cursorId]) {
            cursorsModule.removeCursor(cursorId);
          }
        });
      }
    
      quillRef.on('selection-change', function(range, oldRange, source) {
        sendCursorData(range);
      });
    
      document.addEventListener('cursors-update', function(e) {
        // Handle Removed Connections
        e.detail.removedConnections.forEach(function(connection) {
          if (cursorsModule.cursors[connection.id])
            cursorsModule.removeCursor(connection.id);
        });
    
        updateCursors(e.detail.source);
        updateUserList();
      });
    
      updateCursors(cursors.localConnection);
    });
    
    
    window.cursors = cursors;

    if(this.props.name)
    {
    
    cursors.localConnection.name = this.props.name;
    cursors.localConnection.profile=this.props.profile;
    cursors.localConnection.uuid=this.props.note;
    cursors.update();
    quillRef.enable();
    }else
    {
      cursors.localConnection.name = 'Guest';
      cursors.localConnection.uuid=this.props.note;
      cursors.localConnection.profile= 'https://cdn.onlinewebfonts.com/svg/img_83486.png';
    };

    updateUserList();



}

  

  render() {

    return (
      <div className={cx('editor')}>
      <UserList  users={this.state.users}/>
        <div className={cx('editor-main')}>
          <ReactQuill 
          ref={(el) => { this.reactQuillRef = el }}
          theme={(this.props.name)?'snow':'bubble'}
          readOnly
          modules= {Editor.modules}
          formats= {Editor.formats}
          bounds= '.editor-main'
          />
        </div>
      </div>
    );
  }
}

Editor.modules = {
  cursors: {
    autoRegisterListener: false
  },
  toolbar: [
  [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
  [{ size: [] }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ 'list': 'ordered' }, { 'list': 'bullet' },
  { 'indent': '-1' }, { 'indent': '+1' }],
  ['link', 'image', 'video'],
  ['clean']
  ],
  history: {
    userOnly: true
  },
  clipboard: {matchVisual: false }
};

Editor.formats = [
'header', 'font', 'size',
'bold', 'italic', 'underline', 'strike', 'blockquote',
'list', 'bullet', 'indent',
'link', 'image', 'video'];


 
export default Editor;