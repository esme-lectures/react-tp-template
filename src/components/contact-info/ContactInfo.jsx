import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function ContactInfo() {

  // useParams function from the react-router-dom library
  // can be used to retrieve parameters from the URL 
  let { id } = useParams();

  // Definition of the state
  const [info, setInfo] = useState();

  // API calls is made as soon as the component is rendered
  // Get the details info of a selected contact by calling /contacts/id
  // The result should update the state (info)  
  useEffect(() => {
  }, [])

  // Need to check if the state info already fetched successfully the data or not
  // Info is initially equals to null, when the data is fetched info value will be updated
  // Since it's a state, when its value changes the JSX below will be re-rendered
  if (info) {
    return (

      /*
        Write the HTML (JSX) to display the information about the selected contact
      */
      <div>
      </div>
    )
  }

  else {
    return <p>Data is being fetched...</p>
  }

}
