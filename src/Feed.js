import React from 'react'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import { useStateValue } from './StateProvider'
import "./Feed.css"

function Feed() {

    const [{ posts }] = useStateValue()

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts?.map(post => (
                <Post
                    key={post.id}
                    profileImage={post.profileImage}
                    message={post.message}
                    timestamp={post.timestamp}
                    username={post.username}
                    image={post.image}
                />
            ))}
        </div>
    )
}

export default Feed
