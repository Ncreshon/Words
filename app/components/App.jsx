const React = require('react')
const Words = require('./word.jsx');



class ChalkBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      words: ["hey"],
    }
   
   this.getWords = this.getWords.bind(this);
   this.sayWord = this.sayWord.bind(this);
   
   
  };
  
  componentWillMount(){
    fetch('/getWords')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    
   this.getWords(myJson)
  });
  }

  getWords(words){
    this.setState({words: words})
  }

  sayWord(e){
    var msg = new SpeechSynthesisUtterance(e.target.innerText);
    window.speechSynthesis.speak(msg);
  }

 

  render() {
    return( 
      <div class="container">
    <h1>Let's Learn Some Sight Words {this.state.words[0].word}</h1>
    <div class="row" style={{border: "5px solid #c19a6b", backgroundColor: '#2F4F4F', maxHeight: '800px'}}>
<Words words={this.state.words} sayWord={this.sayWord} />
  
    </div>
  
    </div>
  );
}
}

module.exports = ChalkBoard