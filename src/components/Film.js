import React from 'react';

const Film = (props) => {
  return(
    <div>
    <p>{props.film.name}</p>
    <a href={props.film.url}>Details</a>
    </div>
  )

}

export default Film;
