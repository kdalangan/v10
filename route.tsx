import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Capture from './capture';
import Feedback from './feedback';
//import Simulate from './pages/Simulate';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capture" element={<Capture />} />
        <Route path="/feedback" element={<Feedback />} /> 
        {/* <Route path="/simulate" element={<Simulate />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
