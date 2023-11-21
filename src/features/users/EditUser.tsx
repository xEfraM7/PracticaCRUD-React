import { TextField } from "../../components/TextField";
import { ButtonComponent } from "../../components/ButtonComponent";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";
import { useState } from "react";
import { RootState } from "../../store";

export const EditUser = () => {
  const params = useParams();
  console.log(params.id);

  const dispatch = useDispatch();

  const users = useSelector((store: RootState) => store.users);

  const existingUser = users.filter(
    (user) => String(user.id) === String(params.id)
  );

  const { name, email, id } = existingUser[0];

  const [values, setValues] = useState({
    id: id,
    name: name,
    email: email,
  });

  const navigate = useNavigate();

  // const { name, email, onChange } = useForm({
  //   name: userExists.name,
  //   email: userExists.email,
  // });

  const onEdit = (event: React.FormEvent<HTMLFormElement>) => {
    setValues({ name: "", email: "", id: values.id });
    event.preventDefault();
    dispatch(
      editUser({
        id: values.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{
          type: "text",
          placeholder: "Efrain Cabrera",
          name: "name",
        }}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <br />
      <TextField
        label="Email Address"
        inputProps={{
          type: "email",
          placeholder: "Efra@gmail.com",
          name: "email",
        }}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <ButtonComponent onClick={onEdit}>Edit</ButtonComponent>
    </div>
  );
};
