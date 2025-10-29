import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 200);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  return (
    <div className="flex w-100 h-100 flex-col justify-center items-center gap-6 m-40 border-10 border-slate-300 rounded-full">
      <div className="mr-0 size-5 motion-safe:animate-spin duration-30 absolute h-full flex justify-center items-center z-[1]">
        <span className="h-5 w-5 bg-violet-900 fixed top-40 rounded-full"></span>
      </div>
      <div className="flex w-100 h-100 flex-col justify-center items-center gap-6 z-0">
        <h1 className="text-black text-3xl font-bold bg">⏱️ Stop Watch</h1>
        <span className="text-black text-2xl font-bold">
          {" "}
          {Math.floor(time / 60)} : {time % 60}
        </span>
        <div>
          <button onClick={() => setIsRunning(true)}>Start</button>
          <button onClick={() => setIsRunning(false)}>Pause</button>
          <button onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
