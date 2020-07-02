import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Card extends Component {
    render() {
        return (
            <div className="grid-item">
                <div className="grid-item-wrapper">
                    <div className="grid-item-container">
                        <div className="grid-item-content">
                            <h3 className="item-title">{this.props.title}</h3>
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class SkillCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [
                {
                    title: 'PHP7',
                    description: 'I was formally introduced to PHP in 2015, but had previous experience using the language, and have been using it for both professional and personal projects. I started off with processing scripts for orders, email scheduling, product management and moved on to Content Management Systems and then onto frameworks such as Symfony.'
                },
                {
                    title: 'SQL',
                    description: 'I have been using SQL since working at my IT apprenticeship. I was first introduced to MySQL/MariaDB and PostgreSQL for help storing my data structures for reports, product management (stock) and email subscriber lists. I have used other SQL variants such as MSSQL and Oracle whilst studying. I am proficient in creating my own schemas for complex data systems such as my work recently on an expandable Survey system using Doctrine and relating it to a MySQL 8.0 database.'
                },
                {
                    title: 'HTML/CSS',
                    description: ''
                },
            ]
        }
    }

    render() {
        {
            return this.state.grid.map(card => {
                return <Card title={card.title} description={card.description}/>
            });
        }
    }
}

ReactDOM.render(<SkillCards/>, document.getElementById('skillCards'));