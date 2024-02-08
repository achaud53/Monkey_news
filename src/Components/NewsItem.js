import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {tittle, discription, imageUrl, newsUrl}  = this.props;

    return (
      <div>
         <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{tittle}...</h5>
                <p className="card-text">{discription}...</p>
                <a href={newsUrl}  target="_blank" className="btn btn-sm btn-primary">Go to</a>
            </div>
        </div>
      </div>
    )
  }
}
