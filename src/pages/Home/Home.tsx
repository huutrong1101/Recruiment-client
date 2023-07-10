import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCounter } from "./slices/HomeSlice";

export default function Home() {
  const { Home } = useAppSelector((app) => app);
  const dispatch = useAppDispatch();

  const handleIncreaseButtonClick = () => {
    dispatch(setCounter(Home.counter + 1));
  };

  return (
    <div>
      <div>Home redux counter {Home.counter}</div>
      <button
        className="bg bg-neutral-300 px-2 py-1 rounded"
        onClick={handleIncreaseButtonClick}
      >
        Increase counter
      </button>
    </div>
  );
}
