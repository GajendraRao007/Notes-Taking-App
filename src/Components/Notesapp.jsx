import addNotesButton from '../Images/button.png';
import backgroundimg from '../Images/bg.png';
import lockimg from '../Images/lock.png';
import { useState } from 'react';

function Notesapp() {

    const [popup, setPopup] = useState(false)
    const [bgOverlay, setBgOverlay] = useState(false);

   

    function addButton (){
        setPopup(true)
        setBgOverlay(true); 
    }

    return(
        <>
            <div className="container">
            <div className="side-bar">
                <h1 className="sidebar-text">Pocket Notes</h1>

            <div class="scroll">
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
                <div className='notes-title-box'>
                    <h1 className='circle'>MN</h1>
                    <h1 className='notes-title'>My Notes</h1>
                </div>
            </div>

            </div>   
                <img className="addnotes-btn" onClick={addButton} src={addNotesButton} alt="" srcset="" />

        <div className="notes-section">
            <img className='bg-img' src={backgroundimg} alt="" />
            <h1 className='notes-section-text'>Pocket Notes</h1>
            <p className='notes-text-description'>Send and receive messages without keeping your phone online. <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>

            <div className='footer-box'>
            <img src={lockimg} alt="" />
            <p className='footer-text'> end-to-end encrypted</p>
            </div>

            </div>


        </div>

    {popup && (
      <div className='popup-bg'>
      <div className='pop-up'>
      <h1 className='popup-title'>Create New group</h1>
      <label>Group Name</label><input className='input-groupname' type="text" placeholder='Enter group name' />
      <div className='color-box'>
      <h1 className='color-title'>Choose colour</h1>
      <button className='purple'></button>
      <button className='pink'></button>
      <button className='cyan'></button>
      <button className='orange'></button>
      <button className='darkblue'></button>
      <button className='lightblue'></button>
      </div>
      <button className='create-btn'>Create</button>
      </div> 
  </div>
  )}

{bgOverlay && <div className="background-overlay"></div>}
        </>
    )
}

export default Notesapp;