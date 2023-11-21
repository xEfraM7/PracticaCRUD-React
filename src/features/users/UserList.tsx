import { Link } from "react-router-dom";
import { ButtonComponent } from "../../components/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./userSlice";
import { RootState } from "../../store";

export const UserList = () => {
  const users = useSelector((store: RootState) => store.users);
  const dispatch = useDispatch();

  const handleRemoveUser = (id: string) => {
    dispatch(deleteUser({ id: id }));
  };

  const onClick = () => {
    console.log("soy un click");
  };

  const renderCard = () =>
    users.map((user) => (
      <div
        key={user.id}
        className="bg-gray-300 p-5 flex items-center justify-between"
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span className="font-normal text-gray-700">{user.email}</span>
          <br />
          <span className="font-bold text-gray-700">{user.id}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleRemoveUser(String(user.id))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
              />
            </svg>
          </button>
          <Link to={`edit-user/${user.id}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to={"/add-user"}>
        <ButtonComponent onClick={onClick}>Add User</ButtonComponent>
      </Link>

      <div className="grid gap-5 md:grid-cols-2">
        {users.length >= 1 ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2-text-gray-700 font-semibold">
            No Users
          </p>
        )}
      </div>
      <button onClick={onClick}></button>
    </div>
  );
};
