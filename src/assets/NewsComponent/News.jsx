import React, { Component } from 'react'
import { NewsItem } from './NewsItem';

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Abid Hussain",
      "title": "‘Indian hostility’ looms over Asia Cup’s stripped-back hosts Pakistan",
      "description": "Pakistan gets set to host just four of 13 matches of the regional cricket tournament after India’s refusal to tour.",
      "url": "http://www.aljazeera.com/sports/2023/8/29/cricket-pakistan-asia-cup-2023-hosts-india",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/AP22296405469137-1693310448.jpg?resize=1920%2C1440",
      "publishedAt": "2023-08-29T12:41:01Z",
      "content": "Islamabad, Pakistan When Pakistan last hosted the Asia Cup in 2008, Imran Khan was a political novice, Narendra Modi was still banned from travelling to the United States, Indias cricket team was mak… [+6482 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=fba9a6a4f4fa4afb9568acd6c9cfe6d8";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <>
      <section id='section-news' className=' d-flex'>
        <div className="container">
          <h2 className='mx-4 my-4'>Read & See The Latest Sports News</h2>
          <div className="row my-2">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0 , 45):""} description={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage} newsurl={element.url}/>
              </div>
            })}
          </div>
        </div>
        </section>
      </>
    )
  }
}


export default News
