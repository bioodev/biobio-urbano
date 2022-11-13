const Cancion = ({ datos }) => {

  return (
    <div className="card h-full w-full bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 border border-black shadow-xl">
      <figure>
        <img className="w-full" src={datos.AlbumImageUrl} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-3xl font-black ">
          {datos.TrackName}
        </h2>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <h3 className="text-2xl font-black">{datos.ArtistNameS}</h3>
        </a>
        <h4 className="album text-lg">{datos.AlbumName}</h4>
        <p className="fecha text-sm ">{datos.AlbumReleaseDate}</p>

        <div className="card-actions justify-end">
          <button className="btn-primary btn">
            Listen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cancion;
