import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddUser, EditUser, UserList } from "../features/users";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
        <h1 className="text-center font-bold text-2xl text-gray-700">
          Crud with Redux toolkit
        </h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />

          <Route path="*" element={<UserList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
