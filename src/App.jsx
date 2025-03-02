import "./App.css";
import { useState } from "react";
import Modal from "./modal/modal.jsx";

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <main>
        <div>
          <button onClick={() => setModalActive(true)}>
            Open Modal Window
          </button>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            tenetur iste deleniti id quisquam, aliquid dignissimos aliquam
            tempore, eveniet repudiandae veritatis dolor. Assumenda numquam vero
            cum ipsa! Cum, quae suscipit.
          </p>
        </div>
      </main>

      <Modal active={modalActive} setActive={setModalActive}>
        <h2 className="h2">Modal Window</h2>
        <p className="p">This is a modal content.</p>
        <from className="form">
          <label htmlFor="">1</label>
          <input type="text" />
          <label htmlFor="">2</label>
          <input type="text" />
          <label htmlFor="">3</label>
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </from>
        <button onClick={() => setModalActive(false)}>Close</button>
      </Modal>
    </>
  );
}

export default App;
