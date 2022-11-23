import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="bg-base-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
