import addNotesButton from '../Images/button.png';
import backgroundimg from '../Images/bg.png';
import lockimg from '../Images/lock.png';
import { useState } from 'react';

function Notesapp() {

    const [popup, setPopup] = useState(false);
    const [bgOverlay, setBgOverlay] = useState(false);
    const [title, setTitle] = useState(""); 
    const [selectedColor, setSelectedColor] = useState(""); 
    const [groups, setGroups] = useState([]);

    const groupTitle = (e) => {
        setTitle(e.target.value);
    }

    function addButton() {
        setPopup(true);
        setBgOverlay(true);
    }

    function handleColorChange(color) {
        setSelectedColor(color);
    }

    function createGroup() {
        if (title.trim() !== "") {
            const newGroup = { title: title, color: selectedColor };
            setGroups([...groups, newGroup]);
            setTitle(""); 
            setPopup(false); 
            setBgOverlay(false); 
        }
    }

    return (
        <>
            <div className="container">
                <div className="side-bar">
                    <h1 className="sidebar-text">Pocket Notes</h1>

                    <div className="scroll">
                        {groups.map((group, index) => (
                            <div key={index} className='notes-title-box'>
                                <h1 className='circle' style={{ backgroundColor: group.color }}>{group.title.slice(0, 2).toUpperCase()}</h1>
                                <h1 className='notes-title'>{group.title}</h1>
                            </div>
                        ))}
                    </div>

                </div>
                <img className="addnotes-btn" onClick={addButton} src={addNotesButton} alt="" srcSet="" />

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
                        <label>Group Name</label>
                        <input className='input-groupname' onChange={groupTitle} type="text" placeholder='Enter group name' />
                        <div className='color-box'>
                            <h1 className='color-title'>Choose colour</h1>
                            <button className='purple' onClick={() => handleColorChange("#B38BFA")}></button>
                            <button className='pink' onClick={() => handleColorChange("#FF79F2")}></button>
                            <button className='cyan' onClick={() => handleColorChange("#43E6FC")}></button>
                            <button className='orange' onClick={() => handleColorChange("#F19576")}></button>
                            <button className='darkblue' onClick={() => handleColorChange("#0047FF")}></button>
                            <button className='lightblue' onClick={() => handleColorChange("#6691FF")}></button>
                        </div>
                        <button className='create-btn' onClick={createGroup}>Create</button>
                    </div>
                </div>
            )}

            {bgOverlay && <div className="background-overlay"></div>}
        </>
    )
}

export default Notesapp;
