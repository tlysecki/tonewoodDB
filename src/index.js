import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './index.css';
import App from './App';
import About from './About';
import BackWoods from './BackWoods';
import TopWoods from './TopWoods';
import registerServiceWorker from './registerServiceWorker';

function WoodType(name,top,back,species,janka,description) {
  this.name = name;
  this.top = top;
  this.back = back;
  this.species = species;
  this.janka = janka;
  this.description = description;
}

const woods = [
  new WoodType('Spruce, Sitka',true,false,'Picea sitchensis','510','Sitka Spruce is the single most common top wood for acoustics, and its dominance is well-earned. It has proven to be stiff, light, and strong in its fundamental tone. It does take longer to break in, so a brand new guitar may sound a bit sterile. Martin, Taylor, Yamaha all commonly use it for steel-string acoustics, as well as some of the best luthiers. It can be figured; bearclaw Sitka is an eye-catching wood. Sitka Spruce is widely available in North America.'),
  new WoodType('Cedar, Western Red',true,false,'Thuja plicata','350','Mostly found on classical guitars, Western Red Cedar is the most common type of cedar to be used on guitar tops. It isn\'t rare to see it used on a steel-string top, and shines where Sitka Spruce lacks - its overtones are rich and sparkling. It pairs best with players who use a light touch, and will hit an output limit quicker than spruce-topped guitars.'),
  new WoodType('Mahogany',true,true,'Swietenia or Khaya','950','There are many, many sources of mahogany, the most prominent being Central America and Africa. Mostly, their tonal characteristics are the same - plenty of midrange. Mahogany is likely the most common back and sides you\'ll find on solid wood acoustics. It is also the most common hardwood found on guitar tops. It is warm, can show figure, and is a great all-around choice.'),
  new WoodType('Rosewood, Indian',false,true,'Dalbergia latifolia/sisso','2440','Another classic back and side wood, Indian Rosewood is probably second only to mahogany in popularity. Comparing the two, Indian Rosewood has a broader tonal range, with more depth in the lows and brighter highs, and for that, it is to be a more articulate wood. While more sustainable than Brazilian Rosewood, it should be noted that as of January 1, 2017, all rosewood species were added to the CITES protection list.'),
  new WoodType('Walnut',true,true,'Juglans regia or nigra','2','Testtesttest'),
  new WoodType('',false,false,'','',''),
]

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} woods={woods}>
      <IndexRoute component={About} />
      <Route path='woods/top' component={TopWoods} woods={woods} />  
      <Route path='woods/back' component={BackWoods} woods={woods} />  
    </Route>
  </Router>, document.getElementById('root'));
registerServiceWorker();
