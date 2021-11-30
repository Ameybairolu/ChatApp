import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { dataActions } from "../../store";

// The below component doesn't render anything. Simply obtains data from the server, i.e. the firebase
const LoadData = () => {

    const dispatch = useDispatch();

    const fetchChatDataFromFirebase = useCallback(
        async () => {
            try {
                const response = await fetch('https://chatapi-b173c-default-rtdb.asia-southeast1.firebasedatabase.app/chathistory.json');
                const result = await response.json();
                const allKeys = Object.keys(result);
                dispatch(dataActions.databaseDataSet({
                    obtainedData: result[allKeys[0]],
                }));
            } catch (e) {
                console.log(e);
            }
        }, [dispatch]
    )

    useEffect(() => {
        fetchChatDataFromFirebase()
    }, [fetchChatDataFromFirebase]);
}

export default LoadData;