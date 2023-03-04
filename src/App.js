import { useState } from "react";
import "./App.scss";
import NewModal from "./NewModal/NewModal";
import WelcomeModal from "./WelcomeModal/WelcomeModal";

function App() {
  const [open, setOpen] = useState(false);
  const [animatedOpen, setAnimatedOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>✨ Click me</button>
      <button onClick={() => setAnimatedOpen(true)}>
        ✨ Click me (Animated)
      </button>
      {open && <WelcomeModal open={open} setOpen={setOpen} />}
      <NewModal open={animatedOpen} setAnimatedOpen={setAnimatedOpen}>
        <h3>This is text from props</h3>
      </NewModal>
    </div>
  );
}

export default App;
