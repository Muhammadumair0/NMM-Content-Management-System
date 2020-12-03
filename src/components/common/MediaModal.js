import React, { useState } from "react";
import { Modal } from "antd";
import Header1 from "./Header1";
import LibraryModalModule from "../subComponents/LibraryModalModule";

const MediaModal = ({ buttonTitle, returnButton, fileType, openLibraryModule }) => {
    const [isVisible, setVisible] = useState(!returnButton);
    const [isLibraryModule, setIsLibraryModule] = useState(openLibraryModule);

    const [isUpload, setIsUpload] = useState(true);

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };

    const toggleTab = () => {
        setIsUpload(isUpload === true ? false : true);
        setIsLibraryModule(!isLibraryModule);
    }


    return (
        <div className={"media-modal"}>
            <div className={"custom-button-1"} onClick={showModal}>
                <p>{buttonTitle}</p>
            </div>
            {
                <Modal
                    visible={isVisible}
                    wrapClassName={"media-modal-wrap"}
                    width={"80vw"}
                    bodyStyle={{
                        padding: "2vh 2vw",
                        height: "80vh",
                        backgroundColor: "#F1F1F1",
                    }}
                >
                    <div className={"media-modal-main"}>
                        <div className={"header"}>
                            <Header1 title={fileType === 'all' ? "Add Media" : 'Choose Image'} />
                            <p onClick={hideModal}>{"x"}</p>
                        </div>
                        <div className={"body"}>
                            <div>
                                <p onClick={toggleTab} className={"upload-options" + ' ' + (isUpload !== true ? "disabledTab" : '')}>{"Upload Files"}</p>
                                <p
                                    onClick={toggleTab}
                                    className={"upload-options" + ' ' + (isUpload !== false ? "disabledTab" : '')}
                                >
                                    {"Library"}
                                </p>
                            </div>

                            {fileType === 'image' || isLibraryModule ?
                                (<div className={"after-file-upload"}>
                                    {
                                        (fileType === 'image' && !isLibraryModule
                                            ?
                                            <div className={"upload-left-div-2"}>
                                                <div>
                                                    <img src={"https://i.ytimg.com/vi/1ARwKuYKTMo/maxresdefault.jpg"} alt={""} />
                                                    <p>{"file-name.jpg"}</p>
                                                    <div><p>{"UPLOAD NEW"}</p></div>
                                                </div>
                                            </div>
                                            : <LibraryModalModule isLibraryModule={isLibraryModule} />)
                                    }
                                    <div>
                                        <div className={"upload-right-div"}>
                                            <div><p>{"IMAGE INFO"}</p></div>
                                            <div className={"image-form"}>
                                                <div>
                                                    <label>{"Title"}</label>
                                                    <input />
                                                </div>
                                                <div className={"caption"}>
                                                    <label>{"Caption"}</label>
                                                    <textarea />
                                                </div>
                                                <div>
                                                    <label>{"Alt Text"}</label>
                                                    <input />
                                                </div>
                                            </div>
                                            <div>
                                                <label>{"URL"}</label>
                                                <input readOnly={true} />
                                            </div>
                                        </div>
                                        <div className={"breaker"} />
                                    </div>
                                </div>)

                                :

                                <div className={"drop-files"}>
                                    <p>
                                        {`Drop ${fileType === 'all' ? 'Files' : 'Image'} anywhere to upload`}
                                        <span className={"or-text"}>{"or"}</span>
                                    </p>
                                    <p>{`UPLOAD ${fileType === 'all' ? 'MEDIA' : 'IMAGE'}`}</p>
                                </div>
                            }





                        </div>

                        <div className={"footer"}>
                            <p>{"INSERT INTO POST"}</p>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default MediaModal;
