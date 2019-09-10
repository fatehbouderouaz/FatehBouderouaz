import React from 'react';


function MyLink({name , pages}) {
  function myPages(pages) {
    return pages.map(element => {
      return  <li>{element}</li>     
    })
  }
  return (
   <div>
    <h1>{name}</h1>
      <pre>Page 1 : { JSON.stringify(pages ? pages[0] : 0 , 0 , 2)  }</pre>
      <ul>
        { pages ? myPages(pages) : "" } 
      </ul>
   </div>
  );
}

export default MyLink;
