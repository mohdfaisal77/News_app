// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";


// const NewsBoard = () => {

//     const [articles,setArticles]= useState([]);
//     useEffect(()=>{
//         let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=e19ea4fcda2b45298fffec297a0e365b";
//         fetch(
//             url
//         ).then(response=> response.json()).then(data=>setArticles(data.articles));

//     },[])
//   return (
//     <div>
//       <h2 className="text-center"> Latest<span className="badge bg-danger ">News</span></h2>
//       {articles.map((news,index)=>{
//         return <NewsItem key={index} titile={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
//       })}
//     </div>
//   )
// }

// export default NewsBoard;
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);
  useEffect((category) => {
    let url =

    //Only uncomment this news will fetch according to categories
    // `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e19ea4fcda2b45298fffec297a0e365b`;
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=e19ea4fcda2b45298fffec297a0e365b";
    fetch(url)
     
    fetch(url)
     .then((response) => response.json())
     .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
    <h2 className="text-center"> Latest<span className="badge bg-danger ">News</span></h2>
    <div 
    className="news-container" 
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px"
    }}
  >
      
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
    </div>
  );
};

export default NewsBoard;