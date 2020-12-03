import React, { useState } from "react";
import { Table } from "antd";
import { usersData } from "../../dummyData/users";
import Header1 from "../common/Header1";
import Button1 from "../common/Button1";
import UpsertNewUser from "../subComponents/UpsertNewUser";

const Users = () => {
  const [userEditor, setUserEditor] = useState(false);

  const isOdd = (num) => {
    return num % 2 ? true : false;
  };

  const columns = [
    {
      title: "User",
      dataIndex: "userName",
      width: "8vw",
      className: "userName",
      key: "userName",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "12vw",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "8vw",
      key: "role",
    },
    {
      title: "Date Added",
      dataIndex: "dateAdded",
      width: "15vw",
      key: "dateAdded",
    },
    {
      title: "",
      dataIndex: "category",
      width: "12vw",
      key: "category",
      render: (value, record, index) => (
        <div>
          {" "}
          {isOdd(index) ? (
            <div className={"row-buttons"}>
              <p>Edit User</p>
              <p>
                <img src={require("../../assets/SVG/delete.svg")} alt={""} />
              </p>
            </div>
          ) : (
            <div className={"row-buttons"}>
              <p>Edit User</p>
              <p>
                <img src={require("../../assets/SVG/delete.svg")} alt={""} />{" "}
                <span
                  style={{
                    position: "absolute",
                    height: "10vh",
                    backgroundColor: "#f1f1f1",
                    width: "0.6vw",
                    left: "17.5vw",
                    top: "0vh",
                  }}
                />
              </p>
            </div>
          )}
        </div>
      ),
    },
  ];

  const switchUpsertUserScreen = () => {
    setUserEditor(true);
  };

  return (
    <div className={"general-table-view"}>
      {userEditor ? (
        <UpsertNewUser />
      ) : (
        <div className={"posts"}>
          <div className={"create-post"}>
            <Header1 title={"Users"} />
            <Button1 title={"Add New User +"} handleOnClick={switchUpsertUserScreen} />
          </div>
          <div className={"post-list-types"}>
            <p style={{ fontWeight: "bold" }}>{"All Users(3)"}</p>
            <p style={{ fontWeight: "bold" }}>{"|"}</p>
            <p>{"Admin(3)"}</p>
          </div>
          <div className={"post-table"}>
            <Table
              rowClassName={(record, index) => {
                return !isOdd(index) ? "coloredRow" : "";
              }}
              className="time-table-row-select"
              dataSource={usersData().dataSource}
              columns={columns}
              pagination={false}
             />
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
