import React, { useContext } from 'react';
import '../css/LatestPost.css';
import { store } from './Blog';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Food = () => {

const [info] = useContext(store);
console.log(info);

  return (
    <>
    <Navbar/>
    <h2>Food</h2>
    <div className='flex-post'>
     <div className='post'>
     {
      info.filter(data => data.category === "Food").map(filtereddata =>(
      <div class="row">
        <div class="col-sm-4">
           <Link to={`/category/article/${filtereddata.id}/${filtereddata.category}`}>
           <img src={filtereddata.image} alt="" width="100%" height="200px"/>
           </Link>
        </div>
        <div class="col-sm-5">
          <div class="card-body">
            <h5 class="card-title">{filtereddata.title}</h5>
              <p class="card-text">{filtereddata.description}</p>
            <h6>{filtereddata.category}<small>/{filtereddata.date}</small></h6>
          </div>
        </div>
        <hr id='latest-hr'/>
    </div>
      ))
}
     </div>
     <div className='toppost'>
     <h3>Top Post</h3>
     <br/>
     {
      info.filter(data => data.category === "Food").map(filtereddata =>
      <div class="row">
        <div class="col-sm-3">
        <Link to={`/category/article/${filtereddata.id}/${filtereddata.category}`}>
        <img src={filtereddata.image} alt="toppost-img" className='round-img'/>
        </Link>
        </div>
        <div class="col-sm-6">
          <div class="card-body">
            <h5 class="card-title">{filtereddata.title}</h5>
             
            <h6>{filtereddata.category}<small>/{filtereddata.date}</small></h6>
          </div>
        </div>
        <hr id='top-hr'/>
    </div>
      )
}
<div className='advertise'>
    <p>advertisement</p>
    </div>
     </div>
     
    </div>

    <Footer/>
    </>

    
  )
}

export default Food;