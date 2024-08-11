// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./coverflow.css"


class CoverFlow extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <>
                <div className="coverflow rounded-top-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/14563/14563882.png" alt="CoverFlow" />
                    <h5 className="title">CoverFlow</h5>
                </div>
            </>
        );
    }
}

export default CoverFlow;
