// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./allsongs.css"
import song1 from "../../../../assets/songs/song/1.mp3"
import song1Image from "../../../../assets/songs/images/1.jpg"
import song2 from "../../../../assets/songs/song/2.mp3"
import song2Image from "../../../../assets/songs/images/2.jpg"
import song3 from "../../../../assets/songs/song/3.mp3"
import song3Image from "../../../../assets/songs/images/3.jpg"
import AudioPlayer from "./audioPlayer";


class AllSongs extends Component {
    constructor() {
        super();
        this.state = { currSongIdx: 0 }
        this.songs = [song1, song2, song3]
        this.songsThumb = [song1Image, song2Image, song3Image]
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.playPauseState !== this.props.playPauseState) {
            return true
        }
        else {
            if (nextProps.previousNextState === "next") {
                if (nextState.currSongIdx === this.songs.length - 1) this.state.currSongIdx = 0
                else this.state.currSongIdx += 1
            }
            else {
                if (nextState.currSongIdx === 0) this.state.currSongIdx = this.songs.length - 1
                else this.state.currSongIdx -= 1
            }
        }

        return true

    }


    render() {
        const { playPauseState } = this.props
        return (
            <>
                <div className="allsongs rounded-top-5">
                    <img src={this.songsThumb[this.state.currSongIdx]} alt=" AllSongs" />

                    <div className="audio">
                        <AudioPlayer audioSrc={this.songs[this.state.currSongIdx]} playPauseState={playPauseState} currSongIdx={this.state.currSongIdx} />
                    </div>

                </div>
            </>
        );
    }
}

export default AllSongs;
