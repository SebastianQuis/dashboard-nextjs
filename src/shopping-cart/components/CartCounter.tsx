"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export default function CartCounter({ value = 10 }: Props) {
  const [count, setCount] = useState(value);

  return (
    <>
      <span>{count}</span>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="bg-slate-900 text-white p-4 rounded-xl"
        >
          -1
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-slate-900 text-white p-4 rounded-xl"
        >
          +1
        </button>
      </div>
    </>
  );
}
