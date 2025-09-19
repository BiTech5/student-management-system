import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { SideBar } from './components/Layout/SideBar';
import { SideBarProvider } from './Provider/SideBarProvider';
const DashBoard = lazy(() => import('./pages/DashBoard'));
const Teachers = lazy(() => import('./pages/Teachers'));
const Students = lazy(() => import('./pages/Students'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Results = lazy(() => import('./pages/Results'));
const Courses = lazy(() => import('./pages/Courses'));
import Loading from './components/Loading/Loading';
import { Detail } from './components/Detail/Detail';
function Layout() {
  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <SideBarProvider>
        <SideBar />
        <main className="flex-1 overflow-y-auto md:p-0 pb-16">
          <Outlet />
        </main>
      </SideBarProvider>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/results" element={<Results />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;