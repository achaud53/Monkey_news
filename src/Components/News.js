import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {


  constructor(){
    super();
    console.log("I am constructor from News")
    this.state = {
      articles : [],
      Page : 1,
      totalArticles: 0
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1a7f0b8b1c024aad9bcee2fabd06334c&Page=1&pageSize=20"
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles, totalArticles : parseData.totalArticles})
  }

  onHandlNextPage = async () => {
    if (this.state.Page + 1 > Math.ceil(this.state.totalArticles / 20) ){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a7f0b8b1c024aad9bcee2fabd06334c&Page=${this.state.Page+1}&pageSize=20`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles, Page : parseData.page - 1
    })
   }
  }

  onHandlePrivPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a7f0b8b1c024aad9bcee2fabd06334c&Page=${this.state.Page+1}&pageSize=20`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles, Page : parseData.page + 1
    })
  }



  render() {
    return (
      <div>
        <div className="container my-3">
        <h2>Todays Top News</h2>
        
            <div className="row">
                {
                    this.state.articles.map((element) => {
                        return  <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem tittle={element.title} discription={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>

                    })
                }
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.Page<=1} className="btn btn-dark" onClick={this.onHandlePrivPage} >&larr; Privious</button>
            <button type="button" className="btn btn-dark" onClick={this.onHandlNextPage}> Next &rarr;</button>
            </div>
        </div>
        
      </div>
    )
  }
}
