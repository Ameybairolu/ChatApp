
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
        },
        {
            dp: "https://www.hola.com/us/images/0268-11fe68838026-bf4ca2a78607-1000/horizontal-1200/daniel-craig-in-39-knives-out-39-.jpg",
            id: 5,
            latest: "It is not a Donut Hole at all but a smaller donut with its own hole.",
            messages: [],
            name: "Benoit Blanc",
            username: "notTheBestDetective"
        },
        {
            dp: "https://pbs.twimg.com/profile_images/1190831929211457536/9x6L3cg6_400x400.jpg",
            id: 6,
            latest: "You ridiculous bureaucrats will not dictate how my story ends!",
            messages: [],
            name: "God of Mischief",
            username: "Loki"
        },
        {
            dp: "https://i.pinimg.com/736x/65/0e/e6/650ee6bf521a33488387c5ebaa135de1--gotham-city-dark-knight.jpg",
            id: 7,
            latest: "I'm not wearing hockey pads!",
            messages: [],
            name: "Batman",
            username: "theDarkKnight"
        },
        {
            dp: "https://images.news18.com/ibnlive/uploads/2021/09/cristiano-ronaldo-5.jpg",
            id: 8,
            latest: "Siiii!!!!!!",
            messages: [],
            name: "Cristiano",
            username: "cr7"
        },
        {
            dp: "https://pbs.twimg.com/profile_images/1162020875752943616/IXAYdrua_400x400.jpg",
            id: 9,
            latest: "It's difficult to play against 21 players.",
            messages: [],
            name: "David De Gea",
            username: "theWall"
        },
        {
            dp: "https://i.guim.co.uk/img/media/0538b5e0f902e3e53e896c68b7af2723b7498a86/376_168_2029_1218/master/2029.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fde5ea3f2a693f8abc071bf6a9d54c1f",
            id: 10,
            latest: "I'll kill them all if they don't obey me.",
            messages: [],
            name: "Ralf Rangnick",
            username: "godOfGegenpress"
        },
        {
            dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHbtmMf5WpfspPDwsic2_TcLnN4GOnDcYpA&usqp=CAU",
            id: 11,
            latest: "I am Groot!",
            messages: [],
            name: "I am Groot",
            username: "iAmGroot"
        },
        {
            dp: "https://i1.sndcdn.com/artworks-000280481291-t8c1dc-t500x500.jpg",
            id: 12,
            latest: "I can go one step further",
            messages: [],
            name: "Son Goku",
            username: "kakarot"
        }]
};

// Creating a slice using redux toolkit

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
    whitelist: ["dataSlice.reducer"]
}

// The below line is responsible for data persistance. That is, the data is retrieved even after page reload or unload

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