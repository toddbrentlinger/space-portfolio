import './styles/meyerReset.scss';
import './styles/styles.scss';
import threejsTestInit from './threejs/threejs-test.js';
import StarField from './threejs/starfield.js';

// Three.js

threejsTestInit();
//window.starfield = StarField.create();
window.StarField = StarField;
StarField.displayPerlinImage(100);
