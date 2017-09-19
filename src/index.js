import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './index.css';
import App from './App';
import About from './About';
import Wood from './Wood';
import registerServiceWorker from './registerServiceWorker';

function Wood(name,top,back,species,janka,description,id) {
  this.name = name;
  this.species = species;
  this.janka = janka;
  this.description = description;
}

const woods = [
  new Wood('Sitka Spruce',true,false,'Picea Sitchensis',510,'Sitka Spruce is the single most common top wood for acoustics, and its dominance is well-earned. It has proven to be stiff, light, and strong in its fundamental tone. It does take longer to break in, so a brand new guitar may sound a bit sterile. Martin, Taylor, Yamaha all commonly use it for steel-string acoustics, as well as some of the best luthiers. It can be figured, and bearclaw Sitka is definitely an eye-catching wood. Sitka Spruce is widely available in North America.',0001),
  new Wood('Western Red Cedar',true,false,'Thuja Plicata',350,'Mostly found on classical guitars, Western Red Cedar is the most common type of cedar to be used on guitar tops. It isn\'t rare to see it used on a steel-string top, and shines where Sitka Spruce lacks - its overtones are rich and sparkling. It pairs best with players who use a light touch, and will hit an output limit quicker than spruce-topped guitars.',0002),
  new Wood('Mahogany',true,true,'Swietenia or Khaya',900-1000,'There are many, many sources of mahogany, the most prominent being Central America and Africa. Mostly, their tonal characteristics are the same - plenty of midrange. Mahogany is likely the most common back and sides you\'ll find on all-solid wood acoustics. It is also the most common hardwood found on guitar tops. It is warm, can show figure, and is a great all-around choice.',0003),
  new Wood('',,,'',,''),
  new Wood('',,,'',,''),
  new Wood('',,,'',,''),
  new Wood('',,,'',,''),
  new Wood('',,,'',,''),
]

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={About} />
      <Route path=':woodtype' component={Wood} />
    </Route>
  </Router>, document.getElementById('root'));
registerServiceWorker();
