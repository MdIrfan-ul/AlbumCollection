import AlbumCard from "../AlbumCard/albumCard";
import style from "./AlbumList.module.css";

function AlbumList({albums,deleteAlbums,setAlbumToEdit}){
    return (
        <>
        <div className={style.container}>
      {albums.map(album => (
        <AlbumCard key={album.id} album={album}  deleteAlbums={deleteAlbums} setAlbumToEdit={setAlbumToEdit}/>
      ))}
    </div>
       
        
        </>
    )
}

export default AlbumList;