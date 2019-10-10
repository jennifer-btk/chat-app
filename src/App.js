import React from 'react';
import ArrayCard from './Components/ListCards/ListCards';
import './App.css';

let UserInformation = [
  {
    name: 'Steve Zissou',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0BIFR0h-64_wrmXYdc0p5QE4b6YbkWX2rlT1m7sh4r2kMqNW9w',
    isOnline : false,
  }, {
    name: 'Ned Plimpton',
    avatar: 'https://i.pinimg.com/originals/9c/39/11/9c391197eded6641eeecc91fb182c0f6.jpg',
    isOnline : false
  }, {
    name: 'Klaus Daimler',
    avatar: 'https://i.pinimg.com/originals/c6/6f/3c/c66f3cfbb2ce7358df9ad7c5f5ec307b.jpg',
    isOnline : true
  }, {
    name: 'Eleanor Zissou',
    avatar: 'https://i.pinimg.com/originals/32/d5/f7/32d5f7a6c5c9860a3aa330b5205eacf2.jpg',
    isOnline : true
  }
 ]

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ArrayCard card={UserInformation} />
      </header>
    </div>
  );
}

export default App;