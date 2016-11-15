"use strict";

var females = BABYNAMES.filter(record => "F" == record.sex);
var topFemNames = females.sort((rec1, rec2) => rec2.count - rec1.count).slice(0,100);
<<<<<<< HEAD
console.log(females.length);
=======

>>>>>>> 8be6c5196175ccb9e732587d7a867491294a6545
console.log(topFemNames.length);

//main application React component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var colMeta = {
            count: {
                type: columnTypes.numeric,
<<<<<<< HEAD
                caption: "Number of Babies"
=======
                caption: "Num of Babies"
            },
            sex: {
                caption: "Assigned Sex"
            },
            name: {
                caption: "Name"
>>>>>>> 8be6c5196175ccb9e732587d7a867491294a6545
            }
        }
        return (
            <div className="container">
                <h1>Most Popular Female Baby Names from 1996</h1>
<<<<<<< HEAD
                <DataTable records={this.props.records} columnMeta={colMeta}/>
=======

                <DataTable records={this.props.records} 
                            columnMeta={colMeta} />
>>>>>>> 8be6c5196175ccb9e732587d7a867491294a6545
            </div>
        );
    }
}

//render the App component to the element with id="app"
ReactDOM.render(<App records={topFemNames}/>, document.getElementById("app"));
