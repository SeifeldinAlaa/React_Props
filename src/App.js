import React, { Component } from 'react';
import './App.css';
import Movie from './Components/Movie';
import Actress from './Components/Actress';
import Image from './Components/Image';
import Paragraph from './Components/Paragraph';
import myImage from '../src/Components/image.png';

class App extends Component {
  state = {}
  render() {
    return (
      <div className='App'>
        <Movie title="The Shallows" />
        <Actress name="Blake Lively" />
        <Image img={myImage} />
        <Paragraph sentence="When Nancy (Blake Lively) is attacked by a great white shark while she is surfing alone, she is stranded close to shore, only two hundred yards away from her survival, and then she realizes that getting there and surviving is all it takes. to a will of steel." />
      </div>
    );
  }
}

export default App;
