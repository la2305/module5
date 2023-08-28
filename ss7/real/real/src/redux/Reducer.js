import { GET_ALL_USERS, DELETE_USERS } from "./Types";


const initialState = {
    users: [],
    delete: null,
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_USERS:
            return { ...state, users: action.payload };
        case DELETE_USERS:
            return { ...state, users: action.payload };
        default:
            return state;

    }
}

export default userReducer;