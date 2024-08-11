// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { Component } from "react";
import "./menu.css"
import "../../css/wallpaper.css"
import "../../css/ipodbuttons.css"
import Games from "../Games/games";
import Settings from "../Settings/settings";
import CoverFlow from "../CoverFlow/coverflow";
import Music from "../Music/music";


class DisplayContent extends Component {
    constructor() {
        super();
        this.state = {
            menu: false,
            selectOptionId: 0,
            previousAngle: 0,
            enterInside: false,
            musicSubMenu: false,
            musicSelectOptionId: 0,
            playPauseState: null,
            previousNextState: null
        }
        this.mainComponnetLength = 4
        this.musicSubComponentLength = 4
    }

    menuHandler = () => {
        this.setState({
            menu: !this.state.menu,
            selectOptionId: 0,
            previousAngle: 0,
            enterInside: false,
            musicSubMenu: false,
            musicSelectOptionId: 0
        })
    }

    calculateChangeInAngle = (event) => {
        const divElement = document.querySelector('.menuCircle');
        const rect = divElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        let currentAngle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI)
        if (currentAngle < 0) {
            currentAngle += 360;
        }
        const changeInAngle = currentAngle - this.state.previousAngle
        return { changeInAngle, currentAngle }
    }

    PointerHandler = (event) => {
        if (this.state.menu || this.state.musicSubMenu) {
            if (event.target.className !== "enterCircle") {
                if (event.buttons === 1) {
                    const { changeInAngle, currentAngle } = this.calculateChangeInAngle(event)

                    if (Math.abs(changeInAngle) > 15) {
                        if (this.state.menu) {
                            let comp_length = this.mainComponnetLength - 1
                            this.setState({
                                selectOptionId: changeInAngle >= 0 ? (this.state.selectOptionId >= comp_length ? comp_length : this.state.selectOptionId + 1) :
                                    (this.state.selectOptionId <= 0 ? 0 : this.state.selectOptionId - 1),
                                previousAngle: currentAngle
                            })
                        }
                        else if (this.state.musicSubMenu && !this.state.enterInside) {
                            let comp_length = this.musicSubComponentLength - 1
                            this.setState({
                                musicSelectOptionId: changeInAngle >= 0 ? (this.state.musicSelectOptionId >= comp_length ? comp_length : this.state.musicSelectOptionId + 1) :
                                    (this.state.musicSelectOptionId <= 0 ? 0 : this.state.musicSelectOptionId - 1),
                                previousAngle: currentAngle
                            })
                        }
                    }
                }
            }
        }
    }

    centerCicleHandler = () => {
        if (this.state.menu) this.setState({ enterInside: true, menu: false })

        if (this.state.selectOptionId === 0 && !this.state.musicSubMenu && this.state.menu) {
            this.setState({ musicSubMenu: true, enterInside: false })
        }
        if (this.state.musicSubMenu) this.setState({ enterInside: true, playPauseState: "play" })
    }

    playPauseHandler = () => {
        this.setState({ playPauseState: this.state.playPauseState === "play" ? "pause" : "play" })
    }

    skipForwardHandler = () => {
        this.setState({ previousNextState: "next" })
    }
    skipBackwardHandler = () => {
        this.setState({ previousNextState: "previous" })
    }

    IpodButtons = () => {
        return (<div className="menuCircle" onPointerMove={this.PointerHandler}>
            <div className="enterCircle" onClick={this.centerCicleHandler}></div>
            <span className="menu fw-bold" onClick={this.menuHandler}>MENU</span>
            <img className="skipBackward" alt="skipBackward" onClick={this.skipBackwardHandler} src="https://cdn-icons-png.flaticon.com/128/4818/4818809.png" />
            <img className="skipForward" alt="skipForward" onClick={this.skipForwardHandler} src="https://cdn-icons-png.flaticon.com/128/4818/4818800.png" />
            <img className="playPause" alt="playPause" onClick={this.playPauseHandler} src="https://cdn-icons-png.flaticon.com/128/5725/5725942.png" />
        </div>)
    }

    Wallpaper = () => {
        return (<>
            <img className="rounded-top-5 screen-wallpaper" alt="wallpaper"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxgglc6lQ7vXyAy01OHKrhkA5aV6flaRt1g&s" />
        </>)
    }

    MainMenu = () => {
        const { selectOptionId } = this.state
        return <div className="mainMenu pt-2">


            <div className="text-center py-2"><h5>Mini Ipod App</h5></div>
            <div className={`menuOptions ${selectOptionId === 0 ? "selectedOption" : ""}`}>
                Music
                <img alt="right-arrow" src="https://cdn-icons-png.flaticon.com/128/2735/2735071.png" />
            </div>
            <div className={`menuOptions ${selectOptionId === 1 ? "selectedOption" : ""}`}>
                Games
                <img alt="right-arrow" src="https://cdn-icons-png.flaticon.com/128/2735/2735071.png" />
            </div>
            <div className={`menuOptions ${selectOptionId === 2 ? "selectedOption" : ""}`}>
                Coverflow
                <img alt="right-arrow" src="https://cdn-icons-png.flaticon.com/128/2735/2735071.png" />

            </div>
            <div className={`menuOptions ${selectOptionId === 3 ? "selectedOption" : ""}`}>
                Settings
                <img alt="right-arrow" src="https://cdn-icons-png.flaticon.com/128/2735/2735071.png" />
            </div>

        </div>
    }

    App1 = () => {
        const { menu, selectOptionId, enterInside } = this.state
        return (<>
            <div className="display" >
                <this.Wallpaper />
                {menu ? <this.MainMenu /> : null}
                {selectOptionId === 1 && enterInside ? <Games /> : null}
                {selectOptionId === 2 && enterInside ? <CoverFlow /> : null}
                {selectOptionId === 3 && enterInside ? <Settings /> : null}
            </div>
            <this.IpodButtons />
        </>)
    }

    App2 = () => {
        const { musicSubMenu, musicSelectOptionId, enterInside, playPauseState, previousNextState } = this.state
        return (<>
            <div className="display" >
                <this.Wallpaper />
                <Music musicSubMenu={musicSubMenu} musicSelectOptionId={musicSelectOptionId}
                    enterInside={enterInside} playPauseState={playPauseState} previousNextState={previousNextState} />
            </div>
            <this.IpodButtons />
        </>)
    }


    render() {
        const { musicSubMenu } = this.state
        return (
            <>
                {musicSubMenu ? <this.App2 /> : <this.App1 />}
            </>
        );
    }
}

export default DisplayContent;
