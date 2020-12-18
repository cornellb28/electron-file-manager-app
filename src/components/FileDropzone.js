import React, { useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import { FileContext } from '../contexts/FileContext';

function checkData() {
  if (key in obj) {
    // Do something
  } else {
    // Create key
  }

  const obj = {
    0: 'abc',
    1: 'def'
  }

  const hasZero = 0 in obj

  console.log(hasZero) // true
}

const Dropzone = (props) => {
  const [files, setFiles] = useContext(FileContext);

  const addFiles = (f) => {
    f.map(({ id, comment, artist, album, year, title, genre, picture, path, size, type }) => {

      if (picture === undefined) {
        picture = 
        console.log({ id, comment, artist, album, year, title, genre, picture, path, size, type })
      }
      //setFiles(prevFiles => [...prevFiles, { comment, artist, album, year, title, genre, picture, path, id, size, type }])
    })
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'audio/*',
    onDrop: files => {
      const filesData = files.map(({ id = uuidv4(), name, path, size, type, tags = {} }) => {
        return { id, name, path, size, type, tags };
      });
      app.filesApi.sendFiles(filesData).then((loadedData) => {
        addFiles(loadedData)
      });
    }
  });

  return (
    <>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </>
  );

}

export default Dropzone;