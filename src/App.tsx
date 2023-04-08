import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus, quos fuga incidunt molestias maiores esse exercitationem itaque numquam aliquid quam consequatur sapiente iure consectetur nisi veritatis asperiores maxime fugiat.</p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book"/> Read More</button>
            </div>
          </div>
          {/*<div className="row">
            <div className="col">
              <Customer name={'Rajan'} age={30} title={'Engineer'}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CustomerClass name={'Oscar'} age={50} title={'Software Engineer'}/>
            </div>
          </div>*/}
          <div className="row">
            <div className="col">
              <UserList/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
