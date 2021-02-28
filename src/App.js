import "./App.css";
import Container from "./component/container";
import Containeraction from "./component/containeraction";
import About from "./component/about";
import Footer from "./component/footer";
import Header from "./component/header";
// import Welcome from './component/welcome';
import Body from "./component/body";
import Contact from "./component/contact";
import Demo from "./component/demo";
import Services from "./component/services";
import Testimonial from "./component/testimonial";
import Opencamera from "./component/opencamera";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div
        className="parallax-window"
        data-parallax="scroll"
        data-image-src="img/bg-01.jpg"
      >
        <div className="container-fluid">
          <Header />
          <Route path="/" exact component={Body} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/demo" component={Demo} />
          <Route path="/services" component={Services} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/opencamera" component={Opencamera} />
          <Containeraction />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
