import { useEffect, useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [token, setToken] = useState();
  const getRequest = async () => {
    fetch("https://released-3eef78e81e1c.herokuapp.com", {
      mode: "cors",
    }).then((res) => console.log(res));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch("https://released-3eef78e81e1c.herokuapp.com/submit", {
      method: "POST",
      body: data,
      mode: "cors",
    }).then((res) => console.log(res));
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen flex-col">
        <h1 className="">YURRRRRR</h1>
        <form className="flex flex-col my-4" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="videoname">Paste a youtube video link</label>
          <input
            name="videoname"
            type="text"
            placeholder="..."
            className="border-2 my-4"
          />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
        <AudioPlayer />
        <button onClick={() => getRequest()}>click</button>
      </div>
    </>
  );
}

export default App;
