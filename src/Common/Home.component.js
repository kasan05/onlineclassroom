import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Home extends Component {

static get PropTypes(){
    return{
        selfLearn:PropTypes.func,
        findATeacher:PropTypes.func
    }
}



    render(){
        return (
<div className="vertAlign">
<button type="button" className="btn btn-success" style={{width:"150px",height:"50px",marginRight:"5px",borderRadius: "12px"}}>Self Learn</button>
<button type="button" className="btn btn-success" style={{width:"150px",height:"50px",borderRadius: "12px"}} >Find A Teacher</button>
</div>
	);
    }
}

export default Home
