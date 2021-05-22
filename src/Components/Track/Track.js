import React from 'react';
import './Track.css';

class Track extends React.Component {
    render() {
        return(
            <div class="Track">
                <div class="Track-information">
                    <h3>Track name</h3>
                    <p> Track Artist | Track Album</p>
                </div>
                <button class="Track-action">+ or -</button>
            </div>
        );
    }
}

export default Track;