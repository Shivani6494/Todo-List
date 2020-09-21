import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBook} from '@fortawesome/free-solid-svg-icons'

export default class TodoInput extends Component {
  render() {
    return <div className="card card-body my-3">
      <form >
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              {/* <i className="fas fa-book"></i> */}
              <FontAwesomeIcon icon={faBook} />
            </div>
          </div>
          <input type = "text" 
          className="form-control  text-capitalize"
           placeholder = "add a todo item"/>
           </div>
           <button type="submit" className="btn btn-block btn-primary mt-3 text-capitalize">
             add item
           </button>
      </form>
    </div>
  }
}
