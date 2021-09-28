import { useState } from "react";

const Switch = () => {
  const [allow, setAllow] = useState<boolean>(true);
  return (
    <div className="flex items-center gap-5 cursor-pointer">
      <h1 className={`${allow && "text-green-400"}`}>Yes</h1>

      <div
        className={`h-5 w-11 rounded-xl bg-green-400 flex items-center px-0.5  ${
          !allow && "justify-end"
        }`}
        onClick={() => setAllow(!allow)}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>

      <h1 className={`${!allow && "text-green-400"}`}>No</h1>
    </div>
  );
};

export default Switch;
