import React, { Component } from 'react';
import deleteLogo from './delete.svg';


class KeyPadComponent extends Component{


    handleClick = (e) => {
        this.setState({result: e})
        console.log(this.state)
    }
    
    render(){
        return(
            <div className="col-12 p-0 m-0">

            <div className="d-flex col-12 p-0 justify-content-center">
                <button name="(" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}>(</button>
                <button name=")" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}>)</button>
                <button name="del" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}><img src={deleteLogo} name="del" onClick={ (e) => this.props.button(e.target.name)} className="img-del" alt="delete"/></button>
                <button name="/" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}>&divide;</button>
            </div>
            
            <div className="d-flex col-12 p-0 justify-content-center">
                <button name="1" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>1</button>
                <button name="2" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>2</button>
                <button name="3" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>3</button>
                <button name="*" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}>&times;</button>
            </div>
            
            <div className="d-flex col-12 p-0 justify-content-center">
                <button name="4" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>4</button>
                <button name="5" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>5</button>
                <button name="6" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>6</button>
                <button name="-" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}>&minus;</button>
            </div>
            
            <div className="d-flex col-12 p-0 justify-content-center">
                <button name="7" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>7</button>
                <button name="8" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>8</button>
                <button name="9" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>9</button>
                <button name="+" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}>&#43;</button>
            </div>

            <div className="d-flex col-12 p-0 justify-content-center">
                <button name="c" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}>C</button>
                <button name="0" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white" onClick={ (e) => this.props.button(e.target.name)}>0</button>
                <button name="." className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-olive" onClick={ (e) => this.props.button(e.target.name)}>.</button>
                <button name="=" className="btn btn-dark pt-3 pb-3 col-3 border-secondary font-30px text-white position-relative" onClick={ (e) => this.props.button(e.target.name)}>
                &#x3d;
                </button>
            </div>
            </div>
        )
    }
}

export default KeyPadComponent;