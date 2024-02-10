import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {tittle, discription, imageUrl, newsUrl, author, date, sources}  = this.props;

    return (
      <div>
         <div className="card" >
         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: "90%!important", zIndex:1}}>
            {sources}
          </span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{tittle}...</h5>
                <p className="card-text">{discription}...</p>
                <p className="card-text"><small class="text-muted">By {!author?"Unknown": author} on {date}</small></p>
                <a href={newsUrl}  target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go to</a>
            </div>
        </div>
      </div>
    )
  }
}
