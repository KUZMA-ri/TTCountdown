import { Routes, Route } from "react-router-dom";

import Promo from "./sections/promo/Promo";
import Events from "./sections/events/Events";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/TTCountdown' element={<Promo />} />
        </Routes>
        <Events />
      </div>
  );
}

export default App;
