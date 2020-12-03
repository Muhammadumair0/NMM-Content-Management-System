import React from "react";
import Header1 from "../common/Header1";
import Paragraph1 from "../common/Paragraph1";

const CreateNewPostCategory = (props) => {

  const backToCategories = () => {
      props.backToCategories();
  }

  return (
    <div className={"general-create-post"}>
      <div className={"header"}>
        <Header1 title={"Posts · Create New Post Category"} />
        <p onClick={backToCategories}>{"< Back to Posts"}</p>
      </div>
      <div className={"form"}>
        <div className={"input-label"}>
          <Paragraph1 title={"Category Title"} />
          <input placeholder={"Enter title here"} />
        </div>
        <div className={"input-label"}>
          <Paragraph1 title={"Description"} />
          <textarea placeholder={"Enter Description"} />
        </div>
        <div className={"input-label"}>
          <Paragraph1 title={"URL"} />
          <input placeholder={"/posts/category - autopopulated off of category title"} />
        </div>

        <div className={"black-button"}>
          <p> {"ADD NEW CATEGORY"} </p>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPostCategory;
