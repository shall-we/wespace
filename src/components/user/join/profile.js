import React from "react";
import './profiles.css';
import defaultProfile from "./default_profile.png";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';




class Profile extends React.Component {
 
    onClickFileOpenHandler=e=>{
        console.log('onClickFileOpenHandler');
        e.preventDefault();
        this.fileOpen.click();
    };
  onImagePreviewHandler = e => {
      console.log('onImagePreviewHandler');
     

    if (e.target.files && e.target.files[0]) {
     
        let reader = new FileReader();

        reader.onload=()=>{
            this.img.setAttribute("src", reader.result);
        };

        
      reader.readAsDataURL(e.target.files[0]);
        return;
    }

  };

  render() {
    return (
      <div className="profile">
        <div onClick={this.onClickFileOpenHandler.bind(this)}>
        <img id="profile" src={defaultProfile} ref={ref => (this.img = ref)} alt="profile" />
        <Fab color="primary" aria-label="Add" >
        <AddIcon />
        </Fab>
        </div>
        <input type="file" onChange={this.onImagePreviewHandler.bind(this)} ref={(ref)=>(this.fileOpen=ref)}/>
      </div>
    );
  }
}

export default Profile;
