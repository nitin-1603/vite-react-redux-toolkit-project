import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { AiFillDelete } from "react-icons/ai"
import { removeUser } from "./slices/UserSlice"

const UserDataList = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    });

    const deleteUser = (id) => {
        dispatch(removeUser(id));
    };

    return (
        <div style={{height:'200px', overflow:"scroll"}}>
            {data.map((item, id) => {
                return <li key={id} >
                    {item}
                    <button style={{margin:'5px 40px'}} onClick={() => deleteUser(id)}> <AiFillDelete /> 
                    </button>
                </li>

            })}
        </div >
    )
}

export default UserDataList

// <AiFillDelete />  is a react icon.