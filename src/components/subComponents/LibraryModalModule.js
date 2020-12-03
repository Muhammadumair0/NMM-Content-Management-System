import React, { useState } from 'react';

const LibraryModalModule = ({ libraryUpload }) => {
    const [isLibraryUpload, setIsLibraryUpload] = useState(libraryUpload);
    const [selectedImage, setSelectedImage] = useState({});




    const selectImage = (item, index) => {
        setSelectedImage({item, index});
    }


    return <div>
                <div className={"upload-left-div-1"}>
                    <div className={"hs full no-scrollbar"}>
                        {[1, 2, 3].map((item, index) => {
                            return (<div className={"every-three-set"}>
                                <div className={"item"} onClick={() => selectImage(item, 1)} style={{ backgroundColor: (1 === selectedImage.index && item == selectedImage.item) && '#99FFCC' }} >
                                    <img src={"https://i.ytimg.com/vi/1ARwKuYKTMo/maxresdefault.jpg"} alt={""} />
                                </div>
                                <div className={"item"} onClick={() => selectImage(item, 2)} style={{ backgroundColor: (2 === selectedImage.index && item == selectedImage.item) && '#99FFCC' }}>
                                    <img src={"https://i.ytimg.com/vi/1ARwKuYKTMo/maxresdefault.jpg"} alt={""} />
                                </div>
                                <div className={"item"} onClick={() => selectImage(item, 3)} style={{ backgroundColor: (3 === selectedImage.index && item == selectedImage.item) && '#99FFCC' }}>
                                    <img src={"https://i.ytimg.com/vi/1ARwKuYKTMo/maxresdefault.jpg"} alt={""} />
                                </div>
                            </div>)
                        })}


                    </div>
                </div>
                
    </div>;
}

export default LibraryModalModule;