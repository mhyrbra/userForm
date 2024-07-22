import classes from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onClick }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    last_name: "",
    national_code: "",
  });
  return (
    <div className={classes.searchBox}>
      <h3>جستجو</h3>
      <div className={classes.innerBox}>
        <div className={classes.userInput}>
          <label htmlFor="name">نام</label>
          <input
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
        </div>
        <div className={classes.userInput}>
          <label htmlFor="lastName">نام خانوادگی</label>
          <input
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
        </div>
        <div className={classes.userInput}>
          <label htmlFor="personId">کد ملی</label>
          <input
            type="number"
            id="personId"
            value={userInput.national_code}
            onChange={(e) =>
              setUserInput((prevState) => ({
                ...prevState,
                national_code: e.target.value,
              }))
            }
          />
        </div>
        <button
          onClick={() => {
            setUserInput({ name: "", last_name: "", national_code: "" });
            onClick(userInput);
          }}
        >
          جستجو
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
