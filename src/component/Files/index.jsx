import React from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import "./style.css";


const Files = ({files}) => {
  return (
    <div className='app__files'>
      <div className='app__files-bar'>
        <h3>Files/Documents</h3>
        <div className='app__files-add'>
            <AddPhotoAlternateIcon/>
            <h3>Add Files</h3>
        </div>
      </div>
      {files.map((item, index)=>{
        return(
        <div className='app__files-info' key={index+1}>
          <div className='app__files-pdf'>
              <AudioFileIcon/>
              <h4>{item}.pdf</h4>
          </div>
          <div>
              <DeleteIcon/>
              <DownloadForOfflineIcon/>
          </div>
        </div>
        )

      })}
      
    </div>
  )
}

export default Files;
