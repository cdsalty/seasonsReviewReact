import React from 'react';
import ReactDOM from 'react-dom';

// We originally started/continued with functional components and transitioned into Class/State
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (err)=>console.log(err)
//     );
//     return <div>Lattitude: </div>;
// };

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }


    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err)=>console.log(err)
        );
        return <div>Lattitude: </div>
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// Added ASYNC/AWAIT to get position since the app component was displaying before I was getting the position.
