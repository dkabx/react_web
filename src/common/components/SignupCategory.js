import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <div>
       <label>I AM A</label> <br />
       <input name="group1" type="radio" />
       <label >Athlete</label> &nbsp;&nbsp;&nbsp;
       <input name="group1" type="radio" />
       <label >Parent</label>&nbsp;&nbsp;&nbsp;
       <input name="group1" type="radio" />
       <label >Coach</label>&nbsp;&nbsp;&nbsp;
       <br/><br/>
      </div>
    );
  }
}

export default Category;
