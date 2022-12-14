import './App.css';
import moon from './icon-moon.svg';
import luka from './luka.jpg';
import search from './icon-search.svg';
import twitter from './icon-twitter.svg';
import website from './icon-website.svg';
import company from './icon-company.svg';
import location from  './icon-location.svg';


function App() {

  return (
    <div className="App">
      <div className='header1'>
        <h1 className='dev'>devfinder</h1>
        <button className='dark'>D A R K <img src={moon}/></button>
      </div>
      <div className='header2'>
        <img className='searchIcon' src = {search}  />
        <input  placeholder='Search GitHub username…'/>
        <button className='search'>Search</button>
      </div>
        <div className='container'>
          <img className='luka'  src={luka}/>
          <h1 className='lukaname'>Luka Kheladze</h1>
          <h3 className='ghuser'>@m0h1k4</h3>
          <h2 className='joined'>Joined 25 Sep 2022</h2>
          <Child name = 'Repos' number = {25} />
          <Child name = 'Followers' number = {12} />
          <Child name = 'Following' number = {30} />
         <div className='imgs'>
            <img className='twitter' src = {location} /> 
            <img className='website' src = {website}  />
            <img className='company' src = {company}  />
            <img className='location' src = {twitter}  />
         <div className='txts'>
            <h4 className='kutaisi'>Kutaisi</h4>
            <h4 className='twname'>Not Available</h4>
            <h4 className='kaka'>BitCamp</h4>
            <h4 className='gh'>https://github.blog</h4>
         </div>
         </div>
        </div>
    </div>
  );
}

const Child = (props) => {
  return (
  <div className = 'child'>
    <h3>{props.name}</h3>
    <h4> {props.number} </h4>
  </div>
    );
}

export default App;
