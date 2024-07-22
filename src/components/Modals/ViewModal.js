import classes from "./ViewModal.module.css";
import Backdrop from "./Backdrop";
import { IoCloseSharp } from "react-icons/io5";

const ViewModal = ({ onClick, viewData }) => {
  return (
    <>
      <Backdrop onClick={onClick} />
      <div className={classes.modal}>
        <div className={classes.header}>
          <h4>مشاهده</h4>
          <IoCloseSharp
            size={25}
            style={{ cursor: "pointer" }}
            onClick={onClick}
          />
        </div>
        <div className={classes.body}>
          <p>نام</p>
          <p>{viewData.name}</p>
          <p>نام خانوادگی</p>
          <p>{viewData.last_name}</p>
          <p>کد ملی</p>
          <p>{viewData.national_code}</p>
          <div>
            <button onClick={onClick}>بستن</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewModal;
