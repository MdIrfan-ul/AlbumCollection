import { useEffect, useState } from "react";
import style from "./AlbumForm.module.css";

function AlbumForm ({addAlbums,albumToEdit,setAlbumToEdit,updateAlbums}){
  
  const [title,setTitle] = useState('');

  useEffect(() => {
    if (albumToEdit) {
      setTitle(albumToEdit.title);
    }
  }, [albumToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (albumToEdit) {
      updateAlbums(albumToEdit.id, { ...albumToEdit, title });
    } else {
      const newAlbum = {
        title,
        userId: Math.floor(Math.random() * 10) + 1
      };
      addAlbums(newAlbum);
    }
    setTitle('');
  };

  const handleCancelEdit = () => {
    setAlbumToEdit(null);
    setTitle('');
  };
    return (
      <>
      
      <div className={style.albumForm}>
        <form onSubmit={handleSubmit}>
          <h2 className={style.heading}>{albumToEdit?"Update Album":"Add a Album"}</h2>
          <input className={style.albumInput} type="text" required  value={title} onChange={(e)=>setTitle(e.target.value)}/>
          <button className={style.albumButton}type="submit">{albumToEdit?"Update Album":"Add  Album"}</button>
          {albumToEdit && (
          <button className={style.cancelButton} type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
        </form>
      </div>
      </>
      );
};

export default AlbumForm;