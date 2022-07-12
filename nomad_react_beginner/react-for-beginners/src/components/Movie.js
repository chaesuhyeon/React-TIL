import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


export default function Movie({medium_cover_image, title, summary, genres}) {
  return (
    <div>
    <img src={medium_cover_image} alt={title} />
    <h2><Link to="/movie">{title}</Link></h2>
    <p>{summary}</p>
    <ul>
        {genres.map((g)=> (
        <li key={g}>{g}</li>
        ))}
    </ul>
    <hr />
  </div>
  )
}

Movie.propTypes = {
    medium_cover_image : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired, 
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}