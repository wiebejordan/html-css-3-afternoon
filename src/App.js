import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dropdownView: false,
      

    }
  }
  
  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView});
    
  }

  
  
  
  render(){
  return (
    <div className="App">
      <header>
        <span className="header">Start Bootstrap</span>

        <nav className='desktop-menu'>
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </nav>
        
        <div className='dropdown' onClick={this.toggleDropdown}>
          <span>Menu</span>
          {/* <span className='hamburger'>|||</span>  */}
        </div>

        {this.state.dropdownView
          ? (
            
            <nav id='mobile-menu'>
              <span id='mobile-options'>
              <span className='about'>About</span>
              <span className='projects'>Projects</span>
              <span className='contact'>Contact</span>
              </span>

              <span id='placeholder'></span>
            </nav>
            )
            : null
        }
        
        
      </header>

      <div className='main'>
        
        <h1>GRAYSCALE</h1>
        <p>A free, responsive, one page
          Bootstrap theme created by Start Bootstrap.
        </p>
        
          <button>GET STARTED</button>
        
      </div>
    </div>
  );
  }
}

export default App;
