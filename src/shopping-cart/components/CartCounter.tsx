"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  decrement,
  increment,
  initCounterState,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const res = await fetch("/api/counter").then((res) => res.json());
  return res;
};

export default function CartCounter({ value = 10 }: Props) {
  // const [count, setCount] = useState(value);

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);

  return (
    <>
      <span>{count}</span>

      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-slate-900 text-white p-4 rounded-xl"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-slate-900 text-white p-4 rounded-xl"
        >
          +1
        </button>
      </div>
    </>
  );
}
