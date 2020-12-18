import React from 'react'
import AudioPlayer from './AudioPlayer'
import SongData from './SongData'
import { AudioPlayerProvider } from "react-use-audio-player"

//app.filesApi.updateFiles()
const AudioContent = ({ files }) => {
    //const { id, path, artist, album, year, type, size, comment: { text }, genre, title, picture } = files

    const checkData = (files) => {
        console.log(files)

    }

    checkData(files)

    return (
        <>
            {/* <div className={`song-${id}`}>
                <div>
                    <AudioPlayerProvider>
                        <AudioPlayer file={path} />
                    </AudioPlayerProvider>
                </div>
                <div className="song-data">
                    <SongData
                        title={title}
                        album={album}
                        year={year}
                        genre={genre}
                        type={type}
                        size={size}
                        picture={picture}

                    />
                </div>
            </div> */}
            hello there
        </>
    )
}


export default AudioContent;