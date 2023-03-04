import "./NewModal.scss";

const NewModal = ({ open, setAnimatedOpen, children }) => {
  return (
    <div
      className={`overlay animated ${open ? "show" : ""}`}
      onClick={(event) => {
        if (event.target.className === "overlay") {
          setAnimatedOpen(false);
        }
      }}
    >
      <div className="modal">
        <div onClick={() => setAnimatedOpen(false)} className="closeBtn">
          X
        </div>
        {children}
      </div>
    </div>
  );
};

export default NewModal;
