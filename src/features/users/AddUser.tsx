import { TextField } from "../../components/TextField";
import { ButtonComponent } from "../../components/ButtonComponent";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';

const initialStateForm = {
  name: "",
  email: "",
};

export const AddUser = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, name, formData, onChange } = useForm(initialStateForm);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    dispatch(
      addUser({
        id: uuidv4(),
        ...formData,
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
        onChange={onChange}
        value={name}
      />
      <br />
      <TextField
        label="Email Address"
        inputProps={{
          type: "email",
          placeholder: "Efra@gmail.com",
          name: "email",
        }}
        onChange={onChange}
        value={email}
      />
      <ButtonComponent onClick={onSubmit}>Submit</ButtonComponent>
    </div>
  );
};
