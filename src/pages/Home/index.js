import React, { Component, Fragment } from 'react';
import Header from '../../components/Header'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'



class Home extends Component {
    constructor(){
        super()
        this.state = {
            novoTweet: '',
            conteudoDeTexto: '',
            tweets: []
        }


    }
    adicionaTweet = (event) => {
        event.preventDefault()
        const novoTweet = this.state.novoTweet
        const tweetsAntigos = this.state.tweets
        if (novoTweet){
            this.setState({
                tweets: [novoTweet, ...tweetsAntigos],
                novoTweet: ''
            })
        }
    }
  render() {
    return (
      <Fragment>
          <Header>
              <NavMenu usuario="@dianadiasds"/>
          </Header>
          <div className="container">
              <Dashboard>
                  <Widget>
                      <form className="novoTweet" onSubmit={this.adicionaTweet}>
                          <div className="novoTweet__editorArea">
                              <span className={`
                              novoTweet__status
                              ${this.state.novoTweet.length > 140 ? 'novoTweet__status--invalido' : ''}
                              `}>0/140</span>
                              <textarea className="novoTweet__editor"
                                        value={this.state.novoTweet}
                                        onInput={ (event) => this.setState ({ novoTweet: event.target.value})}
                                        onChange={(event) => this.setState({conteudoDeTexto: event.target.valeu})}
                                        placeholder="O que está acontecendo?">

                              </textarea>
                          </div>
                          <button className="novoTweet__envia"
                                  disabled={this.state.novoTweet.length > 140 ? true : false}
                                  type="submit" >
                              Tweetar
                          </button>
                      </form>
                  </Widget>
                  <Widget>
                      <TrendsArea />
                  </Widget>
              </Dashboard>
              <Dashboard posicao="centro">
                  <Widget>
                      <div className="tweetsArea">
                          {this.state.tweets.map(
                              (tweetInfo, index) =>
                                  <Tweet key={tweetInfo + index} texto={tweetInfo}/>
                          )}
                      </div>
                  </Widget>
              </Dashboard>
          </div>
      </Fragment>
    );
  }
}

export default Home;
