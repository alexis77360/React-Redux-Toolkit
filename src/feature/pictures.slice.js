import {
    createSlice
} from '@reduxjs/toolkit';

//? Créer un slice pour les pictures pour les manipuler dans le store
export const picturesSlice = createSlice({
    name: 'pictures',
    initialState: {
        pictures: null,
    },
    reducers: {
        setPicturesData: (state, action) => {
            state.pictures = action.payload;
        },
        addPicture: (state, action) => {
            state.pictures.push(action.payload);
        },

        //! payload[0] = id payload[1] = artist
        editPicture: (state, action) => {
            state.pictures = state.pictures.map((pic) => {
                if (pic.id === action.payload[1]) {
                    return {
                        ...pic,
                        artist: action.payload[0],
                    };
                }
                return pic;
            });
        },

        deletePicture: (state, action) => {
            state.pictures = state.pictures.filter(
                (pic) => pic.id !== action.payload
            );
        },

    },
});

export const {
    setPicturesData,
    addPicture,
    editPicture,
    deletePicture
} = picturesSlice.actions;
export default picturesSlice.reducer;