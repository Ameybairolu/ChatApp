import { createStore } from 'redux';

const counterReducer = (state = {
    chatdata: [],
    allContacts: [
        {
            dp: "https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-cd72yq_7d7c172f.jpeg?region=0%2C0%2C600%2C600",
            id: 1,
            latest: "Sample text",
            messages: [],
            name: "Leanne Graham",
            username: "leanne"
        },
        {
            dp: "https://ae01.alicdn.com/kf/HTB12HwKBLiSBuNkSnhJq6zDcpXat/Full-Diamond-Painting-Pikachu-Wearing-Hat-Diamond-Mosaic-Diamond-Drawing-Square-Diamond-Embroidery-Cross-Stitch-Decoration.jpg_Q90.jpg_.webp",
            id: 2,
            latest: "Sample text",
            messages: [],
            name: "Ervin Howell",
            username: "ervin"
        },
        {
            dp: "https://qph.fs.quoracdn.net/main-qimg-79f170951f7edb01470230af0f73ff23-pjlq",
            id: 3,
            latest: "Sample text",
            messages: [],
            name: "Madara Uchiha",
            username: "notObito"
        },
        {
            dp: "https://w0.peakpx.com/wallpaper/670/410/HD-wallpaper-light-yagami-art-facial-expression-anime-deathnote-anime-deathnote-deathnote-l-kira.jpg",
            id: 4,
            latest: "Sample text",
            messages: [],
            name: "Light Yagami",
            username: "kira"
        }]
}, action) => {
    // type: 'updateChatData',
    //     changeTo: params,
    //         text: event.target.value,
    //             time: new Date(),

    if (action.type === 'databaseDataSet') {
        if (state.chatdata.length === 0) {
            state.chatdata = action.obtainedData;
        }
        return state;
    }

    if (action.type === 'updateChatData') {
        const index = state.chatdata.findIndex(eachChat => {
            return (eachChat.username === action.changeTo);
        })

        state.chatdata[index].messages.push({
            fromUser: true,
            text: action.text,
            time: action.time
        });

        return state;
    }

    if (action.type === 'initializeNewChat') {
        console.log("reached initialize");
        return state;
    }

    return state;
};

const store = createStore(counterReducer);

export default store;