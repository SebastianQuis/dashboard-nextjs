import WidgetsGrid from "@/components/dashboard/WidgetsGrid";

export default function MainPage() {
  return (
    <>
      <div className="text-black p-6">
        <h1>Dashboard</h1>
        <span>Información general</span>
        <WidgetsGrid />
      </div>
    </>
  );
}
