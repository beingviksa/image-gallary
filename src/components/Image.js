import { useState } from "react";
import Modal from "./Modal";

const Image = ({ path, alt, shape, description }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="image-box">
      <img
        data-testid={`${alt}-image`}
        src={path}
        alt={alt}
        className={`image ${shape}`}
        onClick={handleClick}
      />
      {showModal && <Modal setShowModal={setShowModal}>{description}</Modal>}
    </div>
  );
};

export default Image;
