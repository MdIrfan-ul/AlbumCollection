import React from "react";

import style from "./AlbumCard.module.css";
import { MdDelete, MdEdit } from "react-icons/md";

function AlbumCard({album,deleteAlbums,setAlbumToEdit}) {
  const handleUpdate = () => {
    setAlbumToEdit(album);
  };
  return (
    <>
      <div className={style.albumContainer}>
        <div  className={style.albumId}>Id:{album.id}</div>
        <div className={style.albumTitle}> Title:{album.title}</div>
        <div className={style.actions}>
           <span className={style.edit} onClick={handleUpdate}><MdEdit/></span>
           <span className={style.delete} onClick={()=>{deleteAlbums(album.id)}}><MdDelete /></span>
        </div>
       </div>
    </>
  );
}

export default AlbumCard;
