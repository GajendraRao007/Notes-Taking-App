import addNotesButton from '../Images/button.png';
import backgroundimg from '../Images/bg.png';
import lockimg from '../Images/lock.png';

function Notesapp() {
    return(
        <>
        <div className="container">
             <div className="side-bar">
                <h1 className="sidebar-text">Pocket Notes</h1>
                <img className="addnotes-btn" src={addNotesButton} alt="" srcset="" />
            </div>   

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
        </>
    )
}

export default Notesapp;