export const initialState = {
    Users: [{
        username: "Fordorth",
        likedPosts: ["post1"],
    }]
}

export const Users = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}