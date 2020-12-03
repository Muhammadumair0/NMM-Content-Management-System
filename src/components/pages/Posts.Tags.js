import React, { useState, useEffect } from "react";
import Header1 from "../common/Header1";
import Paragraph1 from "../common/Paragraph1";

const PostTags = (props) => {
  const [tagValue, setTagValue] = useState("");
  const [allTags, setTags] = useState([]);
  const [autoNull, setAutoNull] = useState(false);

  const tags = [
    "Investment Analysis",
    "Investment Analysis",
    "Investment Analysis",
    "Investment Analysis",
    "Investment Analysis",
    "Investment Analysis",
    "Investment Analysis",
    "Investment Analysis",
  ];
  useEffect(() => {
    setTags(tags);
  }, []);

  const addTags = () => {
    const tagsArray = [...allTags];
    tagsArray.push(tagValue);
    setTags(tagsArray);
    setAutoNull(true);
  };

  const removeTag = (index) => {
    const tagsArray = allTags.filter((t, i) => i !== index);
    setTags(tagsArray);
    setAutoNull(true);
  };

  const handleTagInput = (event) => {
    if (event.target.value?.length === 1) {
      setAutoNull(false);
    }
    setTagValue(event.target.value);
  };

  return (
    <div className={"general-tags"}>
      <div className={"header"}>
        <Header1 title={"Posts · Tags"} />
      </div>
      <div className={"tags"}>
        <div>
          <p>{"ALL TAGS"}</p>
        </div>
        <div>
          {allTags.map((tag, index) => {
            return (
              <div>
                <p>{tag}</p>
                <img
                  onClick={() => removeTag(index)}
                  src={require("../../assets/SVG/delete.svg")}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={"form"}>
        <div className={"input-label"}>
          <Paragraph1 title={"Create New Tag"} />
          <input
            value={autoNull ? "" : tagValue}
            onChange={handleTagInput}
            placeholder={"Enter tag here"}
          />
        </div>
        <div className={"black-button"} onClick={addTags}>
          <p> {"ADD NEW TAG"} </p>
        </div>
      </div>
    </div>
  );
};

export default PostTags;
