// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./podcasts.css"


class Podcasts extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <>
                <div className="podcasts rounded-top-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/9111/9111519.png" alt="Podcasts" />
                    <h5 className="title">Podcasts</h5>
                </div>
            </>
        );
    }
}

export default Podcasts;
