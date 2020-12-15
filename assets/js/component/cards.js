import React, {Component} from 'react';
import Routing from '../inc/router.js';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {ReactSVG} from "react-svg";
import ReactTooltip from "react-tooltip";

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
                return (
                    <Card key={key}
                        title={card.title}
                        description={card.description}
                        imagePath={card.imagePath}
                        subTitle={card.subTitle}
                        technologies={card.technologies}
                    />
                );
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
                        <CardTechnologies technologies={this.props.technologies} />
                        <CardHeaderTitle title={this.props.title} subTitle={this.props.subTitle} />
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
            <div className="text-center mb-1">
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
        );
    }
}

class CardTechnologies extends Component {
    render() {
        if (!this.props.technologies) {
            return null;
        }

        return (
            <div className="flex justify-center mb-3">
                {this.props.technologies.map((technology, key) => {
                    return (
                        <CardTechnology
                            key={key}
                            technology={technology}
                        />
                    );
                })}
            </div>
        );
    }
}

class CardTechnology extends Component {
    render() {
        const technology = this.props.technology.technology;

        return (
            <div className="w-8 mx-1">
                <ReactSVG
                    data-tip data-for={`technologyTip-${technology.handle}`}
                    src={`img/svg/${technology.handle}.svg`}
                />

                <ReactTooltip id={`technologyTip-${technology.handle}`}>
                    { technology.name }
                </ReactTooltip>
            </div>
        );
    }
}

class CardDescription extends Component {
    render() {
        return <div>{ ReactHtmlParser(this.props.description) }</div>;
    }
}

export default Cards;