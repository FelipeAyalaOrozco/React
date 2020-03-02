import React from "react";

class Meme extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }

    }

    onClic = () => {
        this.setState({ likes: this.state.likes + 1 });
    }

    render() {
        return (

            <div className="col-6 text-center mb-3 div-imagen  " >

                <img className="imagen w-50 mb-2 centrar  " src={this.props.meme.url} alt="" />
                <h5 className="name">{this.props.meme.name}</h5>
                <button class="btn btn-outline-primary m-2" onClick={this.onClic} >
                    
                    <img className="icono mr-2 mb-2" src="thumbs-up-regular.svg" />
                     Likes {this.state.likes}
                    </button>
                <a class="btn btn-outline-success m-2" href={this.props.meme.url} target="_blank" rel="22">
                    Download
                </a>

            </div >
        );
    }
}

export default Meme;