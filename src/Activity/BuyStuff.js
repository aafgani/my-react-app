import React, {Component} from "react";

const Header = props => <h1>{props.Title}</h1>;

const InventoryItem = props =>(
    <div>
        <p>{props.itemName}</p>
        <hr></hr>
        <p>{props.itemPrice}</p>
    </div>
);

class AppStore extends Component {
    constructor(){
        super();
        this.state = {
            items: [
              { itemName: "Shoe", itemPrice: 5 },
              { itemName: "Sock", itemPrice: 3 }
            ]
          };
    }
    render(){
        return (
            <div className="App">
                <Header Title="BuyStuff"/>
                <InventoryItem
                    itemName={this.state.items[0].itemName}
                    itemPrice={this.state.items[0].itemPrice}
                    />
                    <InventoryItem
                    itemName={this.state.items[1].itemName}
                    itemPrice={this.state.items[1].itemPrice}
                    />
            </div>
        );
    }
}

export default AppStore;