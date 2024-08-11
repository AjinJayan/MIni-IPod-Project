// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./music.css"
import Podcasts from "./MusicSubComponent/Podcasts/podcasts";
import Artists from "./MusicSubComponent/Artists/artists";
import AllSongs from "./MusicSubComponent/AllSongs/allsongs";
import Albums from "./MusicSubComponent/Albums/albums";

class Music extends Component {
    MusicSubMenu = () => {
        const { musicSelectOptionId } = this.props
        return (
            <>
                <div className="musicSubMenu pt-2">


                    <div className="text-center py-2"><h5>Music</h5></div>
                    <div className={`menuOptions ${musicSelectOptionId === 0 ? "selectedOption" : ""}`}>
                        All Songs
                        <img alt="AllSongs" src="https://cdn-icons-png.flaticon.com/128/2735/2735071.png" />
                    </div>
                    <div className={`menuOptions ${musicSelectOptionId === 1 ? "selectedOption" : ""}`}>
                        Artists
                        <img alt="Artists" src="https://cdn-icons-png.flaticon.com/128/2735/2735071.png" />
                    </div>
                    <div className={`menuOptions ${musicSelectOptionId === 2 ? "selectedOption" : ""}`}>
                        Albums
                        <img alt="Albums" src="https://cdn-icons-png.flaticon.com/128/2735/2735071.png" />
                    </div>
                    <div className={`menuOptions ${musicSelectOptionId === 3 ? "selectedOption" : ""}`}>
                        Podcasts
                        <img alt="Podcasts" src="https://cdn-icons-png.flaticon.com/128/2735/2735071.png" />
                    </div>

                </div>
            </>
        );
    }



    render() {
        const { musicSubMenu, musicSelectOptionId, enterInside, playPauseState, previousNextState } = this.props
        // console.log(this.props)
        return (
            <>
                {musicSubMenu ? <this.MusicSubMenu /> : null}
                {musicSelectOptionId === 0 && enterInside ? <AllSongs playPauseState={playPauseState} previousNextState={previousNextState} /> : null}
                {musicSelectOptionId === 1 && enterInside ? <Artists /> : null}
                {musicSelectOptionId === 2 && enterInside ? <Albums /> : null}
                {musicSelectOptionId === 3 && enterInside ? <Podcasts /> : null}
            </>
        );
    }
}

export default Music;
