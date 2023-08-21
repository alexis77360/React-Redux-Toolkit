import { configureStore } from '@reduxjs/toolkit';
import picturesReducer from '../feature/pictures.slice';

//? Créer un store ou on importe le slice
export default configureStore({
    reducer: {
        pictures:picturesReducer,
    },

});