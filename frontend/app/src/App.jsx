import { Link } from "react-router-dom"
import "./App.css";

function App() {

  return (
    <>
      <div class="card">
        <h2 class="heading">Jude Shreffler</h2>
      </div>
      <Link to={'/contact'}>Contact Page</Link>
    </>
  );
}

export default App;
