import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './component/cards';

ReactDOM.render(<Cards endpoint={'api_skills'}/>, document.getElementById('skillCards'));
ReactDOM.render(<Cards endpoint={'api_work'}/>, document.getElementById('workCards'));