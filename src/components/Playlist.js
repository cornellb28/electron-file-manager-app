import React, { useContext, useState } from 'react'
import AudioContent from './AudioContent'
import { FileContext } from '../contexts/FileContext';

const count = 10;

const Playlist = (props) => {
    const [files, setFiles] = useContext(FileContext);
    return (
        <div className="playlist-container">
            {
                files.map(song => (
                    <AudioContent files={song} key={song.id} />
                ))
            }

        </div>
    );
}

export default Playlist;
