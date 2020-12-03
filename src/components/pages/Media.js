import React, { useState } from "react";
import Header1 from "../common/Header1";
import MediaModal from "../common/MediaModal";
import { useHistory } from "react-router-dom";

const Media = () => {
    const history = useHistory();

    const [mediaModalProps, setMediaModalProps] = useState({
        returnButton: true,
        buttonTitle: 'Add New Media +',
        fileType: 'all',
        openLibraryModule: false
      });

    const arrayItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    const editFile = () => {
        history.push('/media/edit?id=fa453d2c-aab1-459a-8493-120b21c0ccd7');
    }

    return (
        <div className={"media-top"}>
            <div className={"media"}>
                <div className={"create-header"}>
                    <Header1 title={"Media"} />
                    <MediaModal {...mediaModalProps} />
                </div>
                <div className={"media-list-types"}>
                    <p style={{ fontWeight: "bold" }}>{"All Media(315)"}</p>
                    <p style={{ fontWeight: "bold" }}>{"|"}</p>
                    <p>{"Published(285)"}</p>
                    <p>{"|"}</p>
                    <p>{"Drafts(15)"}</p>
                    <p>{"|"}</p>
                    <p>{"Trash(9)"}</p>
                </div>
                <div className={"media-list"}>
                    {arrayItems.map((item, index) => {
                        return (
                            <div
                                style={{
                                    borderRight:
                                        (index + 1) % 3 !== 0 &&
                                        index + 1 !== arrayItems.length &&
                                        '0',
                                    borderTop:
                                        ![0, 1, 2].includes(index) && '0'
                                }}
                                className={"file-div"}
                            >
                                <div>
                                    <img
                                        onClick={editFile}
                                        src={"https://i.ytimg.com/vi/1ARwKuYKTMo/maxresdefault.jpg"}
                                    />
                                </div>
                                <div className={"info"}>
                                    <p>{"Ja Morant Panini 2019-20 NBA Black"}</p>
                                    <p>{"File Formant: PNG Image"}</p>
                                    <p>{"Uploaded: 09/15/20 7:10 AM ET"}</p>
                                    <p>{"COPY IMAGE URL"}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={"pagination"}>
                    <div className={"pagination-style-previous"}><div><img src={require("../../assets/SVG/arrow-left.svg")} /><img src={require("../../assets/SVG/arrow-left.svg")} /></div><p>Prev Page</p></div>
                    <div className={"pagination-style-next"}><p>Next Page</p><div><img src={require("../../assets/SVG/arrow-right.svg")} /><img src={require("../../assets/SVG/arrow-right.svg")} /></div></div>
                </div>
            </div>
        </div>
    );
};

export default Media;
