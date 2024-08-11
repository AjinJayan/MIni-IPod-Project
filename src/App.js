import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Component } from "react";
import DisplayContent from "./components/Menu/menu";


class App extends Component {


  render() {
    return (
      <>
        <div className="main-container rounded-5 shadow-lg p-2">
          <DisplayContent />
        </div>
      </>
    );
  }
}

export default App;


