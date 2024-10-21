import CartCounter from "@/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shopping cart",
  description: "Counter cart",
};

export default function CounterPage() {
  return (
    <div
      style={{ width: "calc(100vw - 20rem)" }}
      className="flex flex-col items-center justify-center h-screen text-3xl gap-8"
    >
      <span>Contador</span>

      {/* <CartCounter /> */}
      <CartCounter value={20} />
    </div>
  );
}
