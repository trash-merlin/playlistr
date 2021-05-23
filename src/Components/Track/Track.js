import React from 'react';
import './Track.css';

class Track extends React.Component {
    render() {
        return(
            <div class="Track">
                <div class="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p> {this.props.track.artist}| {this.props.track.album}</p>
                </div>
                <button class="Track-action">+ or -</button>
            </div>
        );
    }
}

export default Track;