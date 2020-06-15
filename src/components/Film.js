import React from 'react';

const Film = (props) => {
  return(
    <ul>
    <li>
    <a href={props.film.url}>{props.film.name}</a>
    </li>
    </ul>
  )

}

export default Film;
