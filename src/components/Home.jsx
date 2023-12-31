import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../slice/UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
const dispatch = useDispatch()
const handleDelete = (id)=>{
dispatch(deleteUser({id : id}))
}

  return (
    <div className="container">
      <h2>Crud App With JSON Server</h2>
      <Link to="/create" className="btn btn-success my-3">Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                  <button onClick={()=>handleDelete(user.id)} className="btn btn-sm btn-danger ms-3">Delete</button>
                  {/* ^ Corrected the button text to "Delete" */}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
