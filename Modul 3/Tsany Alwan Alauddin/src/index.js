import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import FormLogin from './component/FormLogin';

// function HelloWorld(){
//     return <p>Ini adalah function component</p>
// }

// const HelloWorld = () =>{
//     return <p>ini adalah arrow function</p>
// }

    class Statefullcomponent extends React.Component {
        render() {
            return <p> ini adalah Statefull Component</p>
        }
    }
ReactDOM.render(<FormLogin />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
