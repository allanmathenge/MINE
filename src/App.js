import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-primary">
      <Header />
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
