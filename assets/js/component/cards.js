import React, {Component} from 'react';
import Routing from '../inc/router.js';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch(Routing.generate(this.props.endpoint))
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        {
            return this.state.items.map((card, key) => {
                return <Card key={key}
                             title={card.title}
                             description={card.description}
                             imagePath={card.imagePath}
                             subTitle={card.subTitle}
                />
            });
        }
    }
}

class Card extends Component {
    render() {
        return (
            <div className="grid-item">
                <div className="grid-item-wrapper">
                    <CardHeader
                        imagePath={this.props.imagePath}
                        title={this.props.title}
                        subTitle={this.props.subTitle}
                    />
                    <div className="grid-item-content">
                        <CardContent description={this.props.description}/>
                    </div>
                </div>
            </div>
        )
    }
}

class CardHeader extends Component {
    render() {
        return (
            <div className="grid-image-top">
                <CardImage imagePath={this.props.imagePath} />
                <CardHeaderTitle title={this.props.title} subTitle={this.props.subTitle} />
            </div>
        );
    }
}

class CardImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.imagePath} />
            </div>
        )
    }
}

class CardHeaderTitle extends Component {
    render() {
        return (
            <div>
                <span className="item-title transform">{this.props.title} <small>{this.props.subTitle}</small></span>
            </div>
        )
    }
}

class CardContent extends Component {
    render() {
        return (
            <div>
                <CardDescription description={this.props.description}/>
            </div>
        );
    }
}

class CardTitle extends Component {
    render() {
        return (
            <h3 className="item-title">
                {this.props.title}
            </h3>
        )
    }
}

class CardDescription extends Component {
    render() {
        return <div>{ ReactHtmlParser(this.props.description) }</div>;
    }
}

export default Cards;