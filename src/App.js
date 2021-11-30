import './App.css';
import React ,{useState,useEffect}from "react";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Loading from "./Loading";
import NewsComp from "./NewsComp";

function App() {

    const [search, set_search] = useState("");
    const [news_list, set_news_list] = useState([]);
    const [loading, set_loading] = useState(true);



    useEffect(() => {
    
    fetch(`https://content.guardianapis.com/search?page=2&q=${search}&api-key=87b8fb1f-9979-4199-90a9-41e161b1c0b8`)
    .then(data=>data.json())
    .then(doc=>{
      console.log(doc.response.results);
      set_news_list(doc.response.results);
      set_loading(false);
    })


  }, [search]);


if(loading){
  return <Loading />
}

  return (
    <div className="App">
      

      <div className="head">

        <h1>News App</h1>
      </div>


      <div className="search_box">
        <input type="search" value={search} placeholder="Search news here..." onChange={(e)=>set_search(e.target.value)} />
        
      </div>


      <div className="tag_list">
        <h6>Popular Tags : -</h6>
        <p onClick={()=>set_search("breaking news")}>breaking news</p>
        <p onClick={()=>set_search("debates")}>debates</p>
        <p onClick={()=>set_search("sports")}>sports</p>
        <p onClick={()=>set_search("covid")}>covid</p>
        <p onClick={()=>set_search("india")}>india</p>
        <p onClick={()=>set_search("media")}>media </p>
        <p onClick={()=>set_search("photography")}>photography  </p>
      </div>

      <div className="news_data_list">

      <p>Total results fetched : {news_list.length}</p>

             {
                news_list.map((item,index)=>(

                   <div key={index}>
                      {item.webTitle.toLowerCase().includes(search.toLowerCase()) && <NewsComp item={item} />}
                   </div>
                    

                   
                ))
              
              }
         

      </div>




    </div>
  );
}

export default App;
