import addNotesButton from '../Images/button.png';
import backgroundimg from '../Images/bg.png';
import lockimg from '../Images/lock.png';
import sendimg from '../Images/Vector.png';
import bulletimg from '../Images/bullet.png';
import { useState } from 'react';

function Notesapp() {

    const [popup, setPopup] = useState(false);
    const [bgOverlay, setBgOverlay] = useState(false);
    const [title, setTitle] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [groups, setGroups] = useState([]);
    const [groupContent, setGroupContent] = useState({});
    const [noteText, setNoteText] = useState("");
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [isGroupClicked, setIsGroupClicked] = useState(false);

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
            setGroupContent({ ...groupContent, [title]: [] });
            setTitle("");
            setPopup(false);
            setBgOverlay(false);
        }
    }

    function addNote() {
        if (noteText.trim() !== "") {
            setGroupContent({
                ...groupContent,
                [selectedGroup]: [...(groupContent[selectedGroup] || []), noteText]
            });
            setNoteText("");
        }
    }

    function handleGroupClick(groupTitle) {
        setSelectedGroup(groupTitle);
        setIsGroupClicked(true);
    }

    return (
        <>
            <div className="container">
                <div className="side-bar">
                    <h1 className="sidebar-text">Pocket Notes</h1>

                    <div className="scroll">
                        {groups.map((group, index) => (
                            <div key={index} className='notes-title-box' onClick={() => handleGroupClick(group.title)}>
                                <h1 className='circle' style={{ backgroundColor: group.color }}>{group.title.split(' ').map(word => word.charAt(0)).join('').slice(0, 2).toUpperCase()}</h1>
                                <h1 className='notes-title'>{group.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <img className="addnotes-btn" onClick={addButton} src={addNotesButton} alt="" srcSet="" />

                {isGroupClicked ? null : (
                    <div className="home-section">
                        <img className='bg-img' src={backgroundimg} alt="" />
                        <h1 className='notes-section-text'>Pocket Notes</h1>
                        <p className='notes-text-description'>Send and receive messages without keeping your phone online. <br />
                            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                        <div className='footer-box'>
                            <img src={lockimg} alt="" />
                            <p className='footer-text'> end-to-end encrypted</p>
                        </div>
                    </div>
                )}
                {groups.map((group, index) => (
                    <div key={index} className='notes-section' style={{ display: selectedGroup === group.title ? 'block' : 'none' }}>
                        <div className='header'>
                            <h1 className='header-circle'>{group.title.split(' ').slice(0, 2).map(word => word.charAt(0)).join('').toUpperCase()}</h1>
                            <h1 className='notes-title'>{group.title}</h1>
                        </div>

                        <div className='notesbox'>
                            {groupContent[group.title] && groupContent[group.title].map((note, index) => (
                                <div key={index} className='notes'>
                                    <p className='txt'>{note}</p>
                                    <div className='date-time'>
                                        <p>9 Mar 2023</p>
                                        <div>
                                            <img src={bulletimg} alt="" />
                                        </div>
                                        <p>10:10 AM</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='notes-inputbox'>
                            <textarea className='input-notes' value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder='Enter your text here...........' />
                            <img className='addbtn' onClick={addNote} src={sendimg} alt="" srcSet="" />
                        </div>
                    </div>
                ))}

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
            </div>
        </>
    )
}

export default Notesapp;
