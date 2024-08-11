// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./albums.css"


class Albums extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <>
                <div className="albums rounded-top-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/2950/2950754.png" alt="Albums" />
                    <h5 className="title">Albums</h5>
                </div>
            </>
        );
    }
}

export default Albums;
