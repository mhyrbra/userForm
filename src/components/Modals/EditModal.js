import { IoCloseSharp } from "react-icons/io5";
import Backdrop from "./Backdrop";
import classes from "./AddAndEditModal.module.css";
import { useState } from "react";

const EditModal = ({ onCLose, onEdit, userData }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    last_name: "",
    national_code: "",
  });
  return (
    <>
      <Backdrop onClick={onCLose} />
      <div className={classes.modal}>
        <div className={classes.header}>
          <h4>ویرایش</h4>
          <IoCloseSharp
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onCLose}
          />
        </div>
        <form className={classes.body} onSubmit={onEdit.bind(null, userInput)}>
          <label htmlFor="name">نام</label>
          <input
            placeholder={userData.name}
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
            placeholder={userData.last_name}
            required
            type="text"
            id="lastName"
            value={userInput.last_name}
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                last_name: e.target.value,
              }))
            }
          />
          <label htmlFor="nationalCode">کد ملی</label>
          <input
            placeholder={userData.national_code}
            required
            type="number"
            id="nationalCode"
            value={userInput.national_code}
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                national_code: e.target.value,
              }))
            }
          />
          <div className={classes.buttonsGroup}>
            <button type="submit">تایید</button>
            <button onClick={onCLose}>بستن</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditModal;
