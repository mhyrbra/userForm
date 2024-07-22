import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import AddModal from "./components/Modals/AddModal.js";
import { useState } from "react";
import ViewModal from "./components/Modals/ViewModal.js";
import EditModal from "./components/Modals/EditModal.js";
import DeleteModal from "./components/Modals/DeleteModal.js";
import data from "./name.json";

function App() {
  const [userInfo, setUserInfo] = useState(data);
  const [filteredUserInfo, setFilteredUserInfo] = useState([]);
  const [add, setAdd] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [viewModalData, setViewModalData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [editModalIndex, setEditModalIndex] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteModalId, setDeleteModalId] = useState();

  function addUserInfohandler(userInput) {
    const updatedUserInfo = [...userInfo, userInput];
    setUserInfo(updatedUserInfo);

    // setFilteredUserInfo((prevState) => [...prevState, userInput]);

    setAdd((prevState) => !prevState);
  }

  function searchFilterHandler(userInput) {
    const updatedUserInfo = userInfo.filter(
      (data) =>
        userInput.name.trim() === data.name ||
        userInput.last_name.trim() === data.last_name ||
        userInput.national_code.trim() === data.national_code
    );

    setFilteredUserInfo(updatedUserInfo);
  }

  function addModalHandler() {
    setAdd((prevState) => !prevState);
  }

  function viewHandler(data) {
    setShowViewModal((prevState) => !prevState);
    setViewModalData(data);
  }

  function EditModalHandler(id) {
    const targetUserIndex = userInfo.findIndex(
      (user) => user.national_code === id
    );
    setShowEditModal((prevState) => !prevState);
    setEditModalIndex(targetUserIndex);
  }

  function EditHandler(userInput) {
    const updatedItem = { ...userInput };
    let updatedItems = [...userInfo];
    updatedItems[editModalIndex] = updatedItem;
    setUserInfo(updatedItems);
    setShowEditModal(false);
  }

  function deleteModalHandler(id) {
    setShowDeleteModal(true);
    setDeleteModalId(id);
  }

  function deleteHandler() {
    const updatedUsers = userInfo.filter(
      (user) => user.national_code !== deleteModalId
    );
    setUserInfo(updatedUsers);
    setShowDeleteModal(false);
  }

  return (
    <>
      {add && (
        <AddModal onClick={addModalHandler} onChange={addUserInfohandler} />
      )}
      {showViewModal && (
        <ViewModal
          onClick={() => {
            setShowViewModal((prevState) => !prevState);
          }}
          viewData={viewModalData}
        />
      )}
      {showEditModal && (
        <EditModal
          onCLose={() => {
            setShowEditModal(false);
          }}
          onEdit={EditHandler}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onClose={() => {
            setShowDeleteModal(false);
          }}
          onDelete={deleteHandler}
        />
      )}
      <SearchBar onClick={searchFilterHandler} />
      <button className="add" onClick={addModalHandler}>
        افزودن
      </button>
      <Table
        userInfo={filteredUserInfo.length > 0 ? filteredUserInfo : userInfo}
        onClickView={viewHandler}
        onCLickEdit={EditModalHandler}
        onClickDelete={deleteModalHandler}
      />
    </>
  );
}

export default App;
