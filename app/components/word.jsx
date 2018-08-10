const React = require('react')

const Words = ({words, sayWord} )=> {
    console.log(words)
        return (
            <div>
              {words.map((word, i) => {
    return<div class="card text-white col-sm-5" style={{margin: '25px', height: '125spx', backgroundColor: '#b038e0', color: 'white', fontFamily: 'Walter Turncoat, cursive', borderRadius: '15px', border: '5px'}} onClick={(e) => {sayWord(e)}} >
    <div class="card-body text-center">
      <h1 class="card-title">{word.word}</h1>
    </div>
  </div>
    })  }
            </div>
        )
};



// class HelloWorld extends React.Component {
//     render(){
//         return (
//             <div>
//                 <div>
//                     Hey 
//                 </div>
//             </div>
//         )

//     }
    
// }




module.exports = Words;