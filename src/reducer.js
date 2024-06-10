import { v4 as uuid } from 'uuid'

export const initialState = {
    user: {
        photoURL: 'user.jpg',
        displayName: 'John Doe'
    },
    posts: [
        {
            id: uuid(),
            profileImage: 'user.jpg',
            message: 'Try creating a new post!',
            timestamp: new Date(),
            username: 'John Doe',
            image: ''
        }
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "CREATE_POST":
            return {
                ...state,
                posts: [...state.posts, action.post]
            }

        default:
            return state;
    }
}

export default reducer