import React from "react";
import Header1 from "../common/Header1";
import SelectInput from "../common/SelectInput";

const UpsertNewUser = () => {
  return (
    <div className={"upsert-new-user"}>
      <div className={"new-user-header"}>
        <Header1 title={"Add User"} />
      </div>
      <div className={"new-user-form-main"}>
        <div className={"new-user-form"}>
          <div className={"first-div"}>
            <div>
              <label>{"Username*"}</label>
              <input placeholder={"Enter username"} />
            </div>
            <div>
              <label>{"Email Address*"}</label>
              <input placeholder={"Enter email"} />
            </div>
            <div>
              <label>{"First Name"}</label>
              <input placeholder={"Enter first name"} />
            </div>
            <div>
              <label>{"Last Name"}</label>
              <input  placeholder={"Enter last name"} />
            </div>
            <div>
              <label>{"Password*"}</label>
              <input placeholder={"Enter username"} />
            </div>
            <div>
              <label>{"Confirm Password*"}</label>
              <input placeholder={"Enter username"} />
            </div>
          </div>
          <div className={"last-div"}>
            <div>
            <label>{"Role"}</label>
            <SelectInput
              list={['Editor', 'Administrator']}
              placeholder={"Editor or Administrator"}
            />
            </div>
            <div>
            <label>{"Show on writers page?"}</label>
            <SelectInput list={['Yes', 'No']} placeholder={"Yes or No"} />
            </div>
          </div>
        </div>
        <div className={"new-user-form-button"}>
          <p>{"CREATE NEW USER"}</p>
        </div>
      </div>
    </div>
  );
};

export default UpsertNewUser;
