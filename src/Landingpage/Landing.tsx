import { BrowserRouter, Route, Routes} from "react-router-dom";
import '../App.css';
import Layout from "./Layout";
import About from "./AboutUs";
import FoundItem from "./FoundItem";
import LostItem from "./LostItem";


const Landing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="founditem" element={<FoundItem />} />
          <Route path="lostitem" element={<LostItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Landing;