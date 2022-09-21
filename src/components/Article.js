import React,{useContext} from 'react'
import { store } from './Blog';
import { Link } from 'react-router-dom';
const Article = () => {
    const [info] = useContext(store);
    console.log(info);
  return (
    <>
    <div className='article'>
<h4>Latest Article</h4>
<div className='flex-post'>
<div className='post'>
{
 info.filter(data=> data.id % 3 === 0).map(filtereddata =>
 <div key={filtereddata.index} class="row">
   <div class="col-sm-4">
   <Link to={`/category/article/${filtereddata.id}/${filtereddata.category}`}>
   <img src={filtereddata.image} alt="" width="80%"/>
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
 )
}
</div>
<div className='toppost'>
<div className='advertise'>
<p>advertisement</p>
</div>

<h3>Top Post</h3>
<br/>
{
info.filter(data=> data.id % 5 === 3).map(filtereddata =>
 <div class="row" key={filtereddata.index}>
   <div class="col-sm-2">
      <Link to={`/category/article/${filtereddata.id}/${filtereddata.category}`}>
      <img src={filtereddata.image} alt="toppost-img" className='square-img'/>
      </Link>
   </div>
   <div class="col-sm-6">
     <div class="card-body1">
       <h6 class="card-title">{filtereddata.title}</h6>
        
       <h6>{filtereddata.category}<small>/{filtereddata.date}</small></h6>
     </div>
   </div>
   <hr id='top-hr'/>
</div>
    )   
}
</div>
</div>
</div>
    </>
  )
}

export default Article;