import location from '../assets/location.png'

// default card component which uses props in order to draw data from data file

export default function Card(props) {

  return (
    <>
    <div className="card">
      <img className="card-img" src={props.imageUrl} alt="picture of " />
      <div className="card-info">
        <div className="card-location">
          <img className="location-marker" src={location} />
          <span className="card-location-title">{props.location}</span>
          <a className="card-google" href="https://www.google.com">View on Google Maps</a>
        </div>

        <h1 className="card-title">{props.title}</h1>
        <h5 className="card-duration">{props.startDate} - {props.endDate}</h5>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
    </>
  )
}