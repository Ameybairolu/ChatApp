
import { createSlice, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
    persistStore, persistReducer, FLUSH, REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


let initialState = {
    chatdata: [],
    allContacts: [
        {
            dp: "https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-cd72yq_7d7c172f.jpeg?region=0%2C0%2C600%2C600",
            id: 1,
            latest: "I hate anime",
            messages: [],
            name: "Leanne Graham",
            username: "leanne"
        },
        {
            dp: "https://ae01.alicdn.com/kf/HTB12HwKBLiSBuNkSnhJq6zDcpXat/Full-Diamond-Painting-Pikachu-Wearing-Hat-Diamond-Mosaic-Diamond-Drawing-Square-Diamond-Embroidery-Cross-Stitch-Decoration.jpg_Q90.jpg_.webp",
            id: 2,
            latest: "Ash is the worst trainer",
            messages: [],
            name: "Ervin Howell",
            username: "ervin"
        },
        {
            dp: "https://qph.fs.quoracdn.net/main-qimg-79f170951f7edb01470230af0f73ff23-pjlq",
            id: 3,
            latest: "I thought I was the God",
            messages: [],
            name: "Madara Uchiha",
            username: "notObito"
        },
        {
            dp: "https://w0.peakpx.com/wallpaper/670/410/HD-wallpaper-light-yagami-art-facial-expression-anime-deathnote-anime-deathnote-deathnote-l-kira.jpg",
            id: 4,
            latest: "I have a note-book",
            messages: [],
            name: "Light Yagami",
            username: "kira"
        }]
};

const dataSlice = createSlice({
    name: 'everyData',
    initialState,
    reducers: {
        databaseDataSet(state, action) {
            if (state.chatdata.length === 0) {
                state.chatdata = action.payload.obtainedData;
            }
        },
        updateChatData(state, action) {
            const index = state.chatdata.findIndex(eachChat => {
                return (eachChat.username === action.payload.changeTo);
            });

            state.chatdata[index].messages.push({
                fromUser: true,
                text: action.payload.text,
                time: action.payload.time
            });

            let late = action.payload.text;
            if (late.length > 15) {
                console.log("this didnt trigger?");
                late = late.substring(0, 10);
                late = late.padEnd(15, '.');
            }

            state.chatdata[index].latest = late;
        },
        initializeNewChat(state, action) {
            const updateChatData = state.chatdata;
            updateChatData.push(action.payload.chatToAdd[0]);
            state.chatdata = updateChatData;
        },
        removeEmptyChat(state) {
            const updateChatData = state.chatdata.filter(eachChat => {
                return eachChat.messages.length !== 0;
            })
            state.chatdata = updateChatData;
        },
    }
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, dataSlice.reducer);

export const dataActions = dataSlice.actions;


let store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})
let persistor = persistStore(store)

export { store, persistor };