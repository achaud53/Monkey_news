import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {


  constructor(){
    super();
    console.log("I am constructor from News")
    // this.state = {
    //     artticles : this.articles
    // }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1a7f0b8b1c024aad9bcee2fabd06334c"
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles})
  }

  render() {
    return (
      <div>
        <div className="container my-3">
        <h2>Todays Top News</h2>
        
            <div className="row">
                {
                    this.state.artticles.map((element) => {
                        return  <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem tittle={element.title} discription={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>

                    })
                }
            </div>
        </div>
        
      </div>
    )
  }
}
