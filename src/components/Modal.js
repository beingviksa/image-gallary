const Modal = ({ children, setShowModal }) => {
  return (
    <div className="modal" data-testid="modal-container">
      <div className="modal-content">
        <span className="close-btn" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <main className="modal-container">{children}</main>
      </div>
    </div>
  );
};

export default Modal;
