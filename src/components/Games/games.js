// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./games.css"


class Games extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <>
                <div className="games rounded-top-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/10490/10490256.png" alt="Games" />
                    <h5 className="title">Games</h5>
                </div>
            </>
        );
    }
}

export default Games;
