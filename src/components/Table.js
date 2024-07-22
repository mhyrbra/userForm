import classes from "./Table.module.css";
import { FaEye } from "react-icons/fa";
import { FaSquarePen } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";

const Table = ({ userInfo, onClickView, onCLickEdit, onClickDelete }) => {
  return (
    <div className={classes.container}>
      <table className={classes}>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>کد ملی</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((data, i) => (
            <tr key={data.national_code}>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.last_name}</td>
              <td>{data.national_code}</td>
              <td>
                <FaEye
                  className={classes.icon}
                  onClick={onClickView.bind(null, {
                    name: data.name,
                    last_name: data.last_name,
                    national_code: data.national_code,
                  })}
                />
                <FaSquarePen
                  className={classes.icon}
                  onClick={onCLickEdit.bind(null, data.national_code)}
                />
                <FaLocationDot className={classes.icon} />
                <FaTrashCan
                  className={classes.icon}
                  onClick={onClickDelete.bind(null, data.national_code)}
                />
                <FaChartBar className={classes.icon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
