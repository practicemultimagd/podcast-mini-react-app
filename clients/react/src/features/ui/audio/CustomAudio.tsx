import React, { LegacyRef, RefObject } from "react";

interface Props {
  track: {
    src: string | undefined;
    name: string | undefined;
  };
}

interface State {
  playing: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  currentTrack: number;
  tracks: { src: string | undefined; name: string | undefined }[];
}

export default class CustomAudio extends React.Component<Props, State> {
  state = {
    playing: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    currentTrack: 0,
    tracks: [{ src: "", name: "" }],
  };

  audioRef: RefObject<{
    currentTime: any;
    duration: any;
    play: any;
    pause: any;
    volume: any;
  }> = React.createRef();

  componentDidMount() {
    this.setState({
      tracks: [{ src: this.props.track.src, name: this.props.track.name }],
    });
  }

  handlePlay = () => {
    this.audioRef.current?.play();
    this.setState({ playing: true });
  };

  handlePause = () => {
    this.audioRef.current?.pause();
    this.setState({ playing: false });
  };

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.audioRef.current?.currentTime,
      duration: this.audioRef.current?.duration,
    });
  };

  handleVolumeChange = (value: any) => {
    this.setState({ volume: value });
    if (this.audioRef.current) {
      this.audioRef.current.volume = value;
    }
  };

  handleSeek = (e: { target: { value: any } }) => {
    if (this.audioRef.current) {
      this.audioRef.current.currentTime = e.target.value;
    }
  };

  render() {
    const { playing, currentTime, duration, volume, currentTrack, tracks } =
      this.state;

    return (
      <div className="bg-gray-900 flex justify-between align-center mt-3 px-4">
        <audio
          ref={this.audioRef as LegacyRef<HTMLAudioElement> | undefined}
          src={tracks[currentTrack].src}
          onTimeUpdate={this.handleTimeUpdate}
        />
        <div>
          <button
            className="text-white py-2 pr-2"
            onClick={playing ? this.handlePause : this.handlePlay}
          >
            {playing ? (
              <i className="fa fa-stop"></i>
            ) : (
              <i className="fa fa-play"></i>
            )}
          </button>
        </div>
        <input
          className="w-full"
          type="range"
          min={0}
          max={duration?duration:0}
          step={0.01}
          value={currentTime}
          onChange={this.handleSeek}
        />
        <div>
          <button
            className="text-white py-2 pl-2"
            onClick={() =>
              volume === 0
                ? this.handleVolumeChange(1)
                : this.handleVolumeChange(0)
            }
          >
            {volume === 0 ? (
              <i className="fa fa-volume-xmark"></i>
            ) : (
              <i className="fa fa-volume-high"></i>
            )}
          </button>
        </div>
      </div>
    );
  }
}
