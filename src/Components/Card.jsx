import data from '../data'

export default function Card() {
  const blogEntries = data.map(item => {
    return (
      <div className="card">
        <img className="card-img" src="" alt="picture of " />
        <div className="card-info">
          <div className="card-location">

          </div>

          <h1 className="card-title"></h1>
          <h5 className="card-duration"></h5>
          <p className="card-description"></p>
        </div>
      </div>
    )
  })

  return (
    {blogEntries}
  )
}