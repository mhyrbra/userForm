import { IoCloseSharp } from "react-icons/io5";
import Backdrop from "./Backdrop";
import classes from "./AddAndEditModal.module.css";
import { useState } from "react";

const AddModal = ({ onClick, onChange }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    last_name: "",
    national_code: "",
  });

  return (
    <>
      <Backdrop onClick={onClick} />
      <div className={classes.modal}>
        <div className={classes.header}>
          <h4>افزودن</h4>
          <IoCloseSharp
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClick}
          />
        </div>
        <form
          className={classes.body}
          onSubmit={onChange.bind(null, userInput)}
        >
          <label htmlFor="name">نام</label>
          <input
            required
            type="text"
            id="name"
            value={userInput.name}
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
          <label htmlFor="lastName">نام خانوادگی</label>
          <input
            required
            type="text"
            id="lastName"
            value={userInput.lastName}
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                last_name: e.target.value,
              }))
            }
          />
          <label htmlFor="nationalCode">کد ملی</label>
          <input
            required
            type="number"
            id="nationalCode"
            value={userInput.nationalCode}
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                national_code: e.target.value,
              }))
            }
          />
          <div className={classes.buttonsGroup}>
            <button type="submit">افزودن</button>
            <button onClick={onClick}>بستن</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddModal;
