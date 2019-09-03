import React from 'react';
import './App.css';

function MyLink(props) {
  function myPages(pages) {
    return pages.map(element => {
      return  <li>{element}</li>     
    })
  }
  return (
   <div>
    <h1>{props.name}</h1>
      <pre>Page 1 : { JSON.stringify(props.pages ? props.pages[0] : 0 , 0 , 2)  }</pre>
      <ul>
        { props.pages ? myPages(props.pages) : "" } 
      </ul>
   </div>
  );
}

export default MyLink;
