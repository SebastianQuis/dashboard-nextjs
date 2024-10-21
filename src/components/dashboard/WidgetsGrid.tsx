"use client";

import { ShoppingBag } from "lucide-react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export default function WidgetsGrid() {
  const isCartCount = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap gap-4 mt-4 justify-center items-center">
      <SimpleWidget
        title={isCartCount.toString()}
        icon={<ShoppingBag size={50} className="text-indigo-500" />}
        href={"/dashboard/counter"}
        key={isCartCount.toString()}
        label="Contador"
        subtitle="Productos agregados"
      />
    </div>
  );
}
