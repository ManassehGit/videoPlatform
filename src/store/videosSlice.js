import { createSlice } from "@reduxjs/toolkit"

const videos = createSlice({
    name: "videos",
    initialState: {},
    reducers: {
        addVideo  (state, action) {
            const {name, path} = action.payload
            state.push({name, path})
        },
        deleteVideo (state, action) {
            const {id} = action.payload
            const video = state.find(video => video.id === id)
            if(video){
                state.filter(video => video.id !== id)
            }
        }

    }
});

export default videos;