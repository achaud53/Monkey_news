import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 10,
    category : 'general',
    apikey : "1eee192f61334825a7d35894619b59df"
  }

  static propTypes ={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
    apikey : PropTypes.string,
  }


  constructor(){
    super();
    console.log("I am constructor from News")
    this.state = {
      articles : [],
      Page : 1,
      totalArticles: 0,
      loader: true
    }
  }

  async componentDidMount(){
    this.updateNews();
  }

  onHandlNextPage = async () => {
    this.setState({page : this.state.page + 1})
    this.updateNews();
  }

  onHandlePrivPage = async () => {
    this.setState({page : this.state.page - 1})
    this.updateNews()
  }

  async updateNews(){
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page1&pagesize=${this.props.pageSize}`;
    this.setState({loader : false});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles : parseData.articles, totalArticles : parseData.totalArticles})
  }



  render() {
    return (
      <div>
        <div className="container my-3">
        <h1 className='text-center'>Todays Top News</h1>
        {this.state.loader && <Spinner/>}
            <div className="row">
                {  !this.state.loader &&
                    this.state.articles.map((element) => {
                        return  <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem tittle={element.title} discription={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} sources={element.source.name}/>
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
