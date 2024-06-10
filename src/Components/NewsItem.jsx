

// const NewsItem = ({title,description,src,url}) => {
//     return (
//       <div>
//         <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
//     <img src={src} style={{height: "200px",width: "360px"}} className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">{title.slice(0,50)}</h5>
//       <p className="card-text">{description ? description.slice(0,90) : "News information is here"}</p>
//       <a href={url} className="btn btn-primary">Read More</a>
//     </div>
//   </div>
//       </div>
//     )
//   }
  
//   export default NewsItem


// const NewsItem = ({title,description,src,url}) => {
//   return (
//     <div>
//       <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
//   <img src={src} style={{height: "200px",width: "360px"}} className="card-img-top" alt="..."/>
//   <div className="card-body">
//     <h5 className="card-title">{title}</h5>
//     <p className="card-text">{description}</p>
//     <a href={url} className="btn btn-primary">Read More</a>
//   </div>
// </div>
//     </div>
//   )
// }

// export default NewsItem


import news from '../newss/newsimage.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="news-item" style={{ width: "100%"}}>
      <div
        className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
        style={{ maxWidth: "385px" }}
      >
        <img src={src ? src: news} style={{ height: "200px", width: "360px" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;