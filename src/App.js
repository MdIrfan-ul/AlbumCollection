import { useEffect, useState } from "react";
import AlbumForm from "./components/AlbumForm/albumForm";
import AlbumList from "./components/AlbumList/albumList";
import axios from "axios";
import "./index.css";

function App() {
  const [albums, setAlbums] = useState([]);
  const [albumToEdit, setAlbumToEdit] = useState(null);
  const [error,setError] = useState('');

  useEffect(() => {
    fetchAlbums();
  }, []);

  // Function for fetching albums from the api

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const { data } = response;
      setAlbums(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  // Adding Albums to the api

  const addAlbums = async (albumsData) => {
    try {
      console.log(albumsData);
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/albums",
        albumsData
      );
      const { data } = response;
      setAlbums([...albums, data]);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  // Updating Albums from the api

  const updateAlbums = async (id, updatedAlbum) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        updatedAlbum
      );
      const { data } = response;
      setAlbums(albums.map((album) => (album.id === id ? data : album)));
      setAlbumToEdit(null);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  // Deleting Albums from the api

  const deleteAlbums = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
      setAlbums(albums.filter((album) => album.id !== id));
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
        <AlbumForm
          addAlbums={addAlbums}
          albumToEdit={albumToEdit}
          setAlbumToEdit={setAlbumToEdit}
          updateAlbums={updateAlbums}
        />
        {error?(<div className="error">{error}</div>):
        (
          albums && (
            <AlbumList
              albums={albums}
              setAlbumToEdit={setAlbumToEdit}
              deleteAlbums={deleteAlbums}
            />
          )
        )
        }
        
      </div>
    </>
  );
}

export default App;
