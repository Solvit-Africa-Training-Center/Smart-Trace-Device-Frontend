import { BrowserRouter, Route, Routes} from "react-router-dom";
import '../App.css';
import Layout from "./Layout";
import About from "./AboutUs";
import LostItem from "./LostItem";
import FoundItem from "./FoundItem";
import ReportFoundItem from "./ReportFoundItem";
import ReportLostItem from "./ReportLostItem";


const LandingRaute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route  path="home" element={<About />} />
          <Route path="founditem" element={<FoundItem />} />
          <Route path="lostitem" element={<LostItem />} />
          <Route path="reportfounditem" element={<ReportFoundItem />} />
          <Route path="reportlostitem" element={<ReportLostItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default LandingRaute;