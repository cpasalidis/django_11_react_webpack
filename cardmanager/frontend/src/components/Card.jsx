import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



class Card extends Component {
    render() {
      return (
        <div>
          <h2>Welcome to Card!!</h2>
          <hr />
  
          <h3>Cards</h3>
          <table>
            <tbody>
              {this.props.cards.map(card => (
                <tr key={card.text} >
                  <td>{card.text}</td>
                  <td><button>edit</button></td>
                  <td><button>delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
  
  
  const mapStateToProps = state => {
    return {
      cards: state.cards,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);
  