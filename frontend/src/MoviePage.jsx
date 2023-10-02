
const MoviePage = () => {
    return (
      <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="my-4">Movie Title</h1>
        </div>
        <div className="col-md-6 text-md-end">
          <button className="btn btn-primary mb-4">Boka Här</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img
            src="movie-poster.jpg" //  Image URL
            alt="Movie Poster"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/your-movie-trailer-url" // Trailer URL
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ul>
            <li>Genre: Drama</li>
            <li>Längde : 3 timmar </li>
            <li>Skådespelare: Actor 1, Actor 2, Actor 3</li>
            <li>Premiär: 15 sep 2023</li>
          </ul>
        </div>
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula odio ut lorem tempus, ac hendrerit libero viverra.
            Phasellus nec felis nec lectus vehicula interdum.
          </p>
        </div>
      </div>
    </div>
    
    );
  };
  
  export default MoviePage;
  