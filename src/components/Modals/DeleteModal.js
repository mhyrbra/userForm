import classes from "./DeleteModal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import Backdrop from "./Backdrop";

const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <div className={classes.modal}>
        <div className={classes.header}>
          <h4>حذف</h4>
          <IoCloseSharp
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </div>
        <div className={classes.body}>
          <h3>آیا رکورد حذف شود؟</h3>
          <div className={classes.buttonsGroup}>
            <button onClick={onDelete}>بله</button>
            <button onClick={onClose}>خیر</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
