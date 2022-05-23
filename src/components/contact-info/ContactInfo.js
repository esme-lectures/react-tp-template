import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function ContactInfo() {

  let { id } = useParams();

  const [info, setInfo] = useState();

  useEffect(() => {
    fetch("/contacts/id")
      .then(data => data.json())
      .then(data => {
        setInfo(data)
      })
  }, [])

  if (info) {
    return (

      <div>
        <img src={info.image} />
        <ul>
          <li>Name: {info.wine}</li>
          <li>Winery: {info.winery}</li>
          <li>Location: {info.location}</li>
        </ul>
      </div>
    )
  }

  else {
    <p>Data is being fetched...</p>
  }


}
