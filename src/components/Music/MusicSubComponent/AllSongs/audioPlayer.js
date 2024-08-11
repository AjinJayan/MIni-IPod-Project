import React, { useState, useRef, useEffect } from "react";

const AudioPlayer = ({ audioSrc, playPauseState, currSongIdx }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
            const progressPercentage = (audio.currentTime / audio.duration) * 100;
            progressBarRef.current.style.width = `${progressPercentage}%`;
        };

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
            audio.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (playPauseState === "play") {
            audio.play();
        } else {
            audio.pause();
        }
    }, [playPauseState, currSongIdx]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div className="audio-player" style={styles.audioPlayer}>
            <span style={styles.time}>{formatTime(currentTime)}</span>
            <div className="progress-container" style={styles.progressContainer}>
                <div id="progress-bar" ref={progressBarRef} style={styles.progressBar}></div>
            </div>
            <span style={styles.time}>{formatTime(duration)}</span>
            <audio ref={audioRef} src={audioSrc}></audio>
        </div>
    );
};

const styles = {
    audioPlayer: {
        display: "flex",
        alignItems: "center",
        width: "100%",
    },
    time: {
        margin: "0 10px",
        fontFamily: "Arial, sans-serif",
    },
    progressContainer: {
        flexGrow: 1,
        backgroundColor: "#ccc",
        height: "5px",
        borderRadius: "5px",
        position: "relative",
    },
    progressBar: {
        width: "0%",
        height: "100%",
        backgroundColor: "#007bff",
        borderRadius: "5px",
        transition: "width 0.1s linear",
    },
};

export default AudioPlayer;
