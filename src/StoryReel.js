import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://cdn.pixabay.com/photo/2020/09/18/14/13/mountains-5581991_960_720.jpg"
                profileSrc="https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg"
                title="Sonny"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2020/03/01/10/24/power-4892237_960_720.jpg"
                profileSrc="https://i0.pngocean.com/files/348/800/890/computer-icons-avatar-user-login-avatar.jpg"
                title="Rafa"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2020/09/18/21/12/buildings-5582974_960_720.jpg"
                profileSrc="https://img2.freepng.es/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
                title="Frankie"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2020/09/15/09/27/woman-5573135_960_720.jpg"
                profileSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                title="Aaron"
            />
            <Story
                image="https://cdn.pixabay.com/photo/2017/08/27/00/44/cocktail-2684866_960_720.jpg"
                profileSrc="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png"
                title="Mathias"
            />
        </div>
    )
}

export default StoryReel
