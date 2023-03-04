import "./WelcomeModal.scss";

const WelcomeModal = ({ open, setOpen }) => {
  return (
    <div
      className="overlay"
      onClick={(event) => {
        if (event.target.className === "overlay") {
          setOpen(false);
        }
      }}
    >
      <div className="modal">
        <div onClick={() => setOpen(false)} className="closeBtn">
          X
        </div>
        <img
          className="image"
          src="https://media.tenor.com/Rme4nOJ8P7IAAAAM/%E1%83%94%E1%83%98%E1%83%A4%E1%83%9D%E1%83%A0%E1%83%98%E1%83%90-%E1%83%AE%E1%83%90%E1%83%97%E1%83%A3%E1%83%9C%E1%83%90.gif"
        />
      </div>
    </div>
  );
};

export default WelcomeModal;
