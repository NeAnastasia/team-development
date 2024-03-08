import useRoutes from './Components/routes';
import './App.css';
import Navigation from './Components/header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  const routes = useRoutes()
  return (
    <>
      <Navigation />
      {routes}
    </>
  );
}

export default App;
