import React, {Fragment} from 'react';
import Film from './Film.js'

const FilmList = (props) => {

  const filmNodes = props.films.map((film) => {
    return <Film film={film} key={film.id}/>
  });


  return (
    <Fragment>
    <ul>
    <li>
      {filmNodes}
      </li>
      </ul>
    </Fragment>
  )
}


export default FilmList
