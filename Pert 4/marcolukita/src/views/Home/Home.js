import React from "react";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Input/Input";
import Card from "../../Components/Card/Card";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nama: "", status: "" };
  }
  render() {
    return (
      <div classname='container'>
        <Header />
        <Input getValues={(name, value) => this.setState({ [name]: value })} />
        <Card nama={this.state.nama}>
          <p>{this.state.status}</p>
        </Card>
      </div>
    );
  }
  // render(){
  //     return(
  //         <div>
  //             <h2>Title Home Component</h2>
  //             <p>Hello my name is {this.props.name}</p>
  //         </div>
  //     );
  // }
}
