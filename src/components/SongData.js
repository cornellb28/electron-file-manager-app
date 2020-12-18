import React from 'react'

const SongData = ({ title, artist, year, album, genre, type, comment, picture, size }) => {
    return (
        <>
            <div className="info">
                <span>{`Artist: ${artist}`}</span>
                <span>{`Title: ${title}`}</span>
                <span>{`Album: ${album}`}</span>
                <span>{`Genre: ${genre}`}</span>
                <span>{`Type: ${type}`}</span>
                <span>{`Size: ${size}`}</span>
            </div>
        </>
    )
}

export default SongData;