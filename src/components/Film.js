import React from 'react';

const Film = (props) => {
  return(
    <div>
    <a href={props.film.url}>{props.film.name}</a>
    </div>
  )

}

export default Film;
