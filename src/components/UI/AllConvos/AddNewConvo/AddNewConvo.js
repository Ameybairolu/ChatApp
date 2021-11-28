import { Link } from "react-router-dom";

const AddNewConvo = () => {
    return (
        <Link to={'/newchat'}>
            <button>Start new conversation</button>
        </Link>
    )
}

export default AddNewConvo;