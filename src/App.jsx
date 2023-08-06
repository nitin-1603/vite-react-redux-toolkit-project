import { fakeUserData } from "./components/api/index"
import { useDispatch } from 'react-redux'
import UserDataList from "./components/UserDataList";
import { addUser, removeAllUsers } from "./components/slices/UserSlice";

const App = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    dispatch(addUser(name));
  }

  const deleteAllUsers = (user) => {
    dispatch(removeAllUsers(user));
  }


  return (
    <>
      <div>
        <h1>Add User Name : </h1>
        <button type='button' onClick={() => { addNewUser(fakeUserData()) }}>addUser</button>
      </div>

      <div>
        <UserDataList />
      </div>

      <div>
      <h1>Remove all User Name : </h1>
        <button type='button' onClick={() => { deleteAllUsers() }}>removeAllUsers</button>
      </div>
    </>
  )
}

export default App
