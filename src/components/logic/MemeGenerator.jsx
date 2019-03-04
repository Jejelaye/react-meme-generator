import React, { Component } from 'react';
import './MemeGenerator.css'
class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleGenerate = this.handleGenerate.bind(this)
  }
  componentDidMount() {
    // something here
    fetch("https://api.imgflip.com/get_memes")
      .then( response => response.json())
      .then( response => {
        const {memes} = response.data;
        this.setState({ allMemeImgs: memes })
      })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name] : value   })
  }

  handleGenerate(event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const imgUrl = this.state.allMemeImgs[random].url;
    this.setState({randomImg: imgUrl})
  }

  render() { 
    return ( 
      <div>
        <form onSubmit={this.handleGenerate}>
          <label htmlFor="">
            <input type="text"
              value={this.state.topText}
              onChange={this.handleChange}
              name="topText"
              placeholder="Top Text"
            />
          </label>
          {/* <br/> */}

          <label htmlFor=""> 
            <input type="text"
              value={this.state.bottomText}
              onChange={this.handleChange}
              name="bottomText"
              placeholder="Bottom Text"
            />
          </label>

          <button>Generate Meme</button>
        </form>
        <section>
          <img className="meme" src={this.state.randomImg} alt="Meme" />
          <h2 className="top"> {this.state.topText} </h2>
          <h2 className="bottom"> {this.state.bottomText} </h2>
        </section>
      </div>
     );
  }
}
 
export default MemeGenerator;