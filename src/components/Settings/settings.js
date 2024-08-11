// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./settings.css"


class Settings extends Component {
    constructor() {
        super();
        this.state = {}
    }


    render() {
        return (
            <>
                <div className="settings rounded-top-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/694/694900.png" alt="Settings" />
                    <h5 className="title">Settings</h5>
                </div>
            </>
        );
    }
}

export default Settings;
