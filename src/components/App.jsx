import axios from 'axios';
import { useState, useEffect } from 'react';

export const App = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
  'https://api.themoviedb.org/3/configuration/ac2a6bf47776780ec3fc263c9f74d565'
      )
      .then(response => {
        setState(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return <></>;
};
