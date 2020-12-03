import React, { useState, useEffect } from "react";
import Header1 from "../common/Header1";
import Paragraph1 from "../common/Paragraph1";
import SelectInput1 from "../common/SelectInput1";
import MediaModal from "../common/MediaModal";
import SelectInput from "../common/SelectInput";
import JoditEditor from "jodit-react";

const CreateNewPost = ({ type }) => {
  const [tagValue, setTagValue] = useState(null);
  const [allTags, setTags] = useState([]);
  const [autoNull, setAutoNull] = useState(false);
  const [mediaModalProps, setMediaModalProps] = useState({
    returnButton: true,
    buttonTitle: 'Add Media +',
    fileType: 'all',
    openLibraryModule: false
  });

  const [config, setConfig] = useState({
		readonly: false,
    toolbar: true
	})

	const [textAreaValue, setTextAreaValue] = useState('');

	const [inputValue, setInputValue] = useState('')

  const tags = ['Analysis'];

  useEffect(() => {
    setTags(tags)
  }, []);

  
  const handleBlurAreaChange = (textAreaValue, event) => {
    console.log('handleBlurAreaChange', textAreaValue, event)
  };

  const handleTextAreaChange = newTextAreaValue => {
    console.log('handleTextAreaChange', newTextAreaValue)
    return (
      setTextAreaValue(() => newTextAreaValue)
    )
  }

  const handleInputChange = e => {
    const {value} = e.target
    setInputValue(() => value)
    handleTextAreaChange(value)
  }

  const handleTagInput = (event) => {
    if(event.target.value?.length === 1) {
        setAutoNull(false)
    }
    setTagValue(event.target.value);
  }

  const addTags = () => {
    const tagsArray = [...allTags];
    tagsArray.push(tagValue);
    setTags(tagsArray);
    setAutoNull(true);
  }

  const removeTag = (index) => {
    const tagsArray = allTags.filter((t, i) => i !== index);
    setTags(tagsArray);
    setAutoNull(true);
  }

  return (
    <div className={"create-new-post"}>
      <div className={"header"}>
        <Header1 title={`Create New ${type === 'post' ? 'Post': 'Page'}`} />
      </div>
      <div className={"main"}>
        <div className={"left-div"}>
          <div className={"input-label"}>
            <Paragraph1 title={"Title"} />
            <input style={{ padding: '2vh 0.8vw' }} placeholder={"Enter title here"} />
          </div>
          <div className={"article-body"}>
            <Paragraph1 title={"Article Body"} />
            <div className={"options"}>
              <div>
                 {/* <MediaModal {...mediaModalProps} /> */}
              </div>
              <div>
                <p className={"upload-options"}>{"Visual"}</p>
                <p
                className={"upload-options"}
                  style={{
                    fontWeight: "normal",
                    color: "rgba(0, 0, 0, 0.6)",
                    border: "0.1vw solid #b7b7b7",
                    backgroundColor: "#E1E1E1",
                  }}
                >
                  {"HTML"}
                </p>
              </div>
            </div>
            <div className={"text-area"}>
            <JoditEditor
			        	config={config}
                onChange={handleTextAreaChange}
                onBlur={handleBlurAreaChange}
                value={textAreaValue}
                />
            </div>
          </div>
          <div className={"input-label"}>
            <Paragraph1 title={"Summary"} />
            <textarea style={{ height: "16vh" }} />
          </div>
          <div className={"input-label"}>
            <Paragraph1 title={"Author"} />
            <SelectInput list={["Admin","Ethan","Umair","Abdul"]} placeholder={"Default to Logged in Admin (dropdown from writers list)"} />
          </div>
          <div className={"input-label"}>
            <Paragraph1 title={"Metadata description"} />
            <textarea style={{ height: "16vh" }} />
          </div>
          <div className={"input-label"}>
            <Paragraph1 title={"Meta keywords"} />
            <input />
          </div>
        </div>
        <div className={"right-div"}>
          <div className={"publish-post"}>
            <Paragraph1 title={"Publish Post"} />
            <div className={"sub-div"}>
              <div className={"buttons"}>
                <p>{"Save as Draft"}</p>
                <p>{"Preview Post"}</p>
              </div>
              <div className={"info"}>
                <div>
                  <div>
                    <p>{"Post Status"}</p>
                  </div>
                  <div>
                    <p>{"Unpublished"}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>{"Last Saved"}</p>
                  </div>
                  <div>
                    <p>{"09/08/20 1:15 PM"}</p>
                  </div>
                </div>
              </div>
              <div className={"footer"}>
                <div className={"publish-button"}>
                  <p>{"Publish Post"}</p>
                </div>
                <div className={"trash-button"}>
                  <p>{"Move to Trash"}</p>
                </div>
              </div>
            </div>
            <div className={"inputs"}>
              <SelectInput1
                defaultValue={"Public"}
                list={["Public", "Private"]}
                placeholder={"Visiblity"}
              />
              <SelectInput1
                defaultValue={"None"}
                list={["None", "Category 1", "Category 2"]}
                placeholder={"Category (1)"}
              />
              <SelectInput1
                defaultValue={"No"}
                list={["No", "Yes"]}
                placeholder={"Featured"}
              />
            </div>
          </div>
          <div className={"tags"}>
            <Paragraph1 title={"Tags"} />
            <div>
                <div style={{ position: 'relative' }}>
                <input className={"tags-input"} value={autoNull ? '': tagValue} onChange={handleTagInput} onKeyPress={(e) => { e.key === "Enter" && addTags() }} />
                <p className={"plus-sign"} style={{ position: 'absolute', fontSize: '0.7vw', fontWeight: '900', letterSpacing: '0.1vw', color: 'rgba(0, 0, 0, 0.4)', bottom:'1.2vh', right:'1vw'}} onClick={addTags}>{"+"}</p>
                </div>
                <div className={"tags-handler"}>
                    {
                        allTags?.map((tag, index) => {
                        return <p key={index} className={"tag"} onClick={() => removeTag(index)}>{tag}<span>{"x"}</span></p>
                        })
                    }
                </div>
            </div>
          </div>
          <div className={"featured-image-1"}>
            <Paragraph1 title={"Featured Image"} />
            <div>
              <p>{"Choose Image"}</p>
            </div>
          </div>
          <div className={"featured-image-2"}>
            <Paragraph1 title={"Featured Image"} />
            <div>
              <div>
                <img src={require("../../assets/SVG/Mask.svg")} />
              </div>
                <p>{"Choose new image"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
