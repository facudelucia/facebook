import React, { useState } from 'react'

import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

import { useStateValue } from './StateProvider';
import "./MessageSender.css"

function MessageSender() {

    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState("")
    const [imageURL, setImageURL] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "CREATE_POST",
            post: {
                message: input,
                timestamp: new Date(),
                profileImage: user.photoURL,
                username: user.displayName,
                image: imageURL
            }
        })
        setInput("")
        setImageURL("")
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        className="messageSender__input"
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        onChange={e => setInput(e.target.value)}
                    />
                    <input
                        value={imageURL}
                        onChange={e => setImageURL(e.target.value)}
                        placeholder="Image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Videos</h3>
                </div>
                <div className="messageSender__option">
                    <EmojiEmotionsOutlinedIcon style={{ color: "yellow" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
