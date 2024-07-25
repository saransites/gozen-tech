import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import { Logout } from "./components/Logout";

const AllTasks = lazy(() => import("./components/All tasks"));
const Task1 = lazy(() => import("./components/Task 1/Task1"));
const Task2 = lazy(() => import("./components/Task 2/Task2"));
const Task3 = lazy(() => import("./components/Task3/Task3"));
const Task4 = lazy(() => import("./components/Task4/Task4"));
const Task5 = lazy(() => import("./components/Task5/Task5"));
const Task6 = lazy(() => import("./components/Task6/Task6"));
const Task7 = lazy(() => import("./components/Task7/Task7"));
const Task7Home = lazy(() => import("./components/Task7/Pages/Task7Home"));
const Task7About = lazy(() => import("./components/Task7/Pages/Task7About"));
const Task7Contact = lazy(() => import("./components/Task7/Pages/Task7Contact"));
const Task8 = lazy(() => import("./components/Task8/Task8"));
const Task10 = lazy(() => import("./components/Task10/Task10"));
const MyErrorBoundary = lazy(() => import("./components/ErrorBoundary/Task11"));
const Protected = lazy(() => import("./components/Protected"));
const Task14 = lazy(() => import("./components/Task14/Task14"));

function App() {
  return (
    <BrowserRouter>
      <div className="sticky top-0 bg-blue-500 p-4 flex justify-between">
        <Link
          to="/alltasks"
          className="border-2 border-black p-2 text-white rounded px-6 hover:bg-slate-600 transition duration-500"
        >
          All Tasks
        </Link>
        <Logout />
      </div>
      <Suspense fallback={<h1 className="text-xl">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/alltasks" element={<Protected Component={AllTasks} />} />
          <Route path="/task1" element={<Protected Component={Task1} />} />
          <Route path="/task2" element={<Protected Component={Task2} />} />
          <Route path="/task3" element={<Protected Component={Task3} />} />
          <Route path="/task4" element={<Protected Component={Task4} />} />
          <Route path="/task5" element={<Protected Component={Task5} />} />
          <Route path="/task6" element={<Protected Component={Task6} />} />
          <Route path="/task7" element={<Protected Component={Task7} />}>
            <Route index element={<Protected Component={Task7Home} />} />
            <Route path="home" element={<Protected Component={Task7Home} />} />
            <Route path="about" element={<Protected Component={Task7About} />} />
            <Route path="contact" element={<Protected Component={Task7Contact} />} />
          </Route>
          <Route path="/task8" element={<Protected Component={Task8} />} />
          <Route path="/task10" element={<Protected Component={Task10} />} />
          <Route path="/task11" element={<Protected Component={MyErrorBoundary} />} />
          <Route path="/task14" element={<Protected Component={Task14} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
