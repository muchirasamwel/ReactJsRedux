import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AddItem, DeleteItem} from "../redux/actions";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            name: ''
        }
        this.updateName = this.updateName.bind(this);
        this.addName = this.addName.bind(this);
    }

    updateName(evnt) {
        let name = evnt.target.value;

        this.setState({name})
    }

    addName() {
        this.props.addItem(this.state.name);
        this.updateState();
    }
    updateState()
    {
        this.setState({items:this.props.items})
    }

    render() {
        return (
            <div>
                HELLO THERE
                <div>
                    lets play a game
                    <input type="text" onChange={this.updateName}/>
                    <br/>
                    <label>Your New name is:</label>
                    <p> {this.state.name}</p>
                </div>
                <div>
                    <button onClick={this.addName}>Add Name</button>
                </div>
                <div>
                    <label>Names</label>
                    <ul>
                        {this.state.items.map(function(item){
                         return  <li key={item} onClick={this.props.deleteItem(item)}>{item}</li>
                        })}
                    </ul>
                </div>
            </div>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: item => dispatch(AddItem(item)),
        deleteItem: item => dispatch(DeleteItem(item)),
    };
}
function mapStateToProps(state) {
    return {
       items:state.items,
    }
}

const MainPage = connect(mapStateToProps, mapDispatchToProps)(Page);

export default MainPage;
