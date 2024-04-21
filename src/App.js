import { useState, useEffect, createContext } from "react";
import "./App.css";
import Event from "./components/Event.js";
import Counter from "./Counter.jsx";
import { useSelector, useDispatch } from "react-redux";
import { randomColor } from "./redux/colorSlice.js";
import User from "./User.jsx";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { Link, Outlet } from "react-router-dom";

// const queryClient = new QueryClient();

export const nameContext = createContext("name");

export function App() {
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = color;
  }, [color]);

  const [rgbValue, setRgbValue] = useState("rgb(100,100,100");
  const createRandomColor = () => {
    let r = Math.random() * 255,
      g = Math.random() * 255,
      b = Math.random() * 255;
    setRgbValue(`rgb(${r},${g},${b})`);
  };

  return (
    <main className="main_content">
        {/* METHOD REACT QUERY*/}
        {/* <QueryClientProvider client={queryClient}>
        <User />
      </QueryClientProvider> */}
        {/* FIN METHOD REACT QUERY*/}

        <div>
          <Link to={"home"}>
            <img src="../logo1Black.png" className="logo_index" alt="logo" />
          </Link>
          <p>Organise vos évènements</p>
        </div>
        <Outlet />

        <div style={{ backgroundColor: "coral" }}></div>
        {/* METHOD REACT RECOIL*/}
        <RecoilRoot>
          <User />
        </RecoilRoot>
        {/* FIN METHOD REACT RECOIL*/}

        <Event id={1} rgbValue={rgbValue} createNewColor={createRandomColor}>
          <h1>Vos futurs évènement ici</h1>
        </Event>
        <Counter />
        <button
          onClick={() => {
            dispatch(randomColor());
          }}
        >
          Changer couleur background
        </button>
      </main>
  );
}

export default App;
