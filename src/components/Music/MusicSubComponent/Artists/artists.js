// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./artists.css"


class Artists extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <>
                <div className="artists rounded-top-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/4889/4889072.png" alt="Artists" />
                    <h5 className="title">Artists</h5>
                </div>
            </>
        );
    }
}

export default Artists;
