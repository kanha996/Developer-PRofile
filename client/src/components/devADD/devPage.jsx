import React, { useState } from "react";
import "./devPage.css";
import InputModal from "../InfoAdd-modal/info";

export default function DevAdd({ isAdded , setIsAdded}) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="devAdd-section">
        <div className="devAdd-txt">
          Could not find what you were looking for ?
        </div>
        <div className="devAdd-btn">
          <button
            type="submit"
            className="add-btn"
            onClick={() => setModal(true)}
          >
            Add Developer info
          </button>
        </div>
      </div>
      {modal && <InputModal closeModal={setModal} isAdded={isAdded} setIsAdded={setIsAdded}/>}
    </>
  );
}
