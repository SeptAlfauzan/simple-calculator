import React, { Component } from "react";

class ResultComponent extends Component{


    render(){
        const {result} = this.props;
        return(
            <div className="d-flex p-0">
                <input className="form-control col-12 bg-dark border-dark m-auto p-0 text-white font-30px text-right p-2 height-100" value={result} type="text"></input>
            </div>
        )
    }
}

export default ResultComponent;