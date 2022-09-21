import React, { useContext } from 'react'
import { store } from './Blog';
import { Link } from 'react-router-dom';

const Latest = () => {
 const [info] =  useContext(store)

  return (
    <>
    <div className='Stories'>
    <h4>The Latest</h4>
    <div class="card-deck" style={{margin: "50px"}}>
    {
      info.filter(data => data.id > 10).map(filtereddata =>(
    
        <div class="card">
        <Link to={`/category/article/${filtereddata.id}/${filtereddata.category}`}>
        <img className="card-img-top" src={filtereddata.image} alt="Card cap" height="250px"/>
        </Link>
        <div class="card-body">
          <h5 class="card-title">{filtereddata.title}</h5>
          <p class="card-text1">{filtereddata.description}</p>
        </div>
        <div class="card-footer">
        <strong>{filtereddata.category}</strong> / <small>{filtereddata.date}</small>
        </div>
      </div>
      ))
      }
  
</div>
</div>
<hr/>

    </>
  )
}

export default Latest;