import React, {Component} from "react";

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
        fetch('/api/' + this.props.endpoint)
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
                return <Card key={key} title={card.title} description={card.description}
                             header={card.header !== undefined ? this.props.header : null}/>
            });
        }
    }
}

class Card extends Component {
    render() {
        return (
            <div className="grid-item">
                <div className="grid-item-wrapper">
                    {this.props.header !== null ?
                        <CardHeader image={this.props.header.image} title={this.props.header.title}/> : ''}
                    <div className="grid-item-content">
                        <CardContent title={this.props.title} description={this.props.description}/>
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
                <CardImage image={this.props.image}/>
                <CardHeaderTitle title={this.props.title}/>
            </div>
        );
    }
}

class CardImage extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image}/>
            </div>
        )
    }
}

class CardHeaderTitle extends Component {
    render() {
        return (
            <div>
                <span className="item-title transform">{this.props.title}</span>
            </div>
        )
    }
}

class CardContent extends Component {
    render() {
        return (
            <div>
                <CardTitle title={this.props.title}/>
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
        return (
            <p>
                {this.props.description}
            </p>
        );
    }
}

export default Cards;