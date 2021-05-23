import React from 'react';
import './Track.css';

class Track extends React.Component {
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
    addTrack(){
        this.props.onAdd(this.props.track);
    }

    removeTrack(){
        this.props.onRemove(this.props.track);
    }
    render() {
        return(
            <div class="Track">
                <div class="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p> {this.props.track.artist}| {this.props.track.album}</p>
                </div>
                <button 
                    class="Track-action"
                    onClick={this.addTrack}
                >
                        +
                </button>
                <p> / </p>
                <button 
                    class="Track-action"
                    onClick={this.removeTrack}
                >
                        -
                </button>
            </div>
        );
    }
}

export default Track;