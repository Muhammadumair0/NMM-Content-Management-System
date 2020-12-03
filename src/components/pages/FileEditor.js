import React from "react";
import Header1 from "../common/Header1";
import { useHistory } from "react-router-dom";

const FileEditor = () => {
  const history = useHistory();

  const backToMedia = () => {
    history.push("/media");
  };

  return (
    <div className={"file-editor"}>
      <div className={"header"}>
        <Header1 title={"Edit Media"} />
        <p onClick={backToMedia}>{"< GO BACK"}</p>
      </div>
      <div className={"main"}>
        <div className={"left-div"}>
          <div>
            <img src={"https://i.ytimg.com/vi/1ARwKuYKTMo/maxresdefault.jpg"} />
          </div>
          <div className={"info"}>
            <p>{"Ja Morant Panini 2019-20 NBA Black"}</p>
            <p>{"File Formant: PNG Image"}</p>
            <p>{"Uploaded: 09/15/20 7:10 AM ET"}</p>
            <p>{"COPY IMAGE URL"}</p>
          </div>
        </div>
        <div className={"right-div"}>
        <div className={"upload-right-div"}>
          <div>
            <p>{"IMAGE INFO"}</p>
          </div>
          <div className={"image-form"}>
            <div>
              <label>{"Title"}</label>
              <input value={"Ja Morant Panini 2019-20 NBA Black"} />
            </div>
            <div className={"caption"}>
              <label>{"Caption"}</label>
              <textarea value={"2019-20 Panini Prizm Ja Morant #249 RC Rookie PSA 10 GEM MINT Grizzlies, 2019-20 Panini NBA Hoops Factory Sealed Hobby Box, Ja Morant Zion"} />
            </div>
            <div>
              <label>{"Alt Text"}</label>
              <input value={"Ja Morant Panini 2019-20 NBA Black"} />
            </div>
          </div>
          <div className={"url-section"}>
            <label>{"URL"}</label>
            <input readOnly={true} value={"https://bit.ly/2TiOWjC"} />
          </div>

        </div>
        <div className={"buttons"}>
            <p>{"Delete"}</p>
            <p>{"Update Info"}</p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default FileEditor;
