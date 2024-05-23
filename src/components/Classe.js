import React from "react";


class Classe extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);    
        this.state={ name : null,repo:null,photo:null};
       
    } 
   
       async componentDidMount(){
            const data = await fetch(`https://api.github.com/users/dewang002`)
            const json  =await data.json();
            console.log(json)
            this.setState({
                name:json.name,
                repo:json.public_repos,
                photo:json.avatar_url
            })
            
        }
        componentWillUnmount(){
            console.log("component will unmount")
        }
       
    render() {
        return(
            <div>
              
            <h1>{this.state.name}</h1>
            <h1>repos:{this.state.repo}</h1>
            <img src={this.state.photo}/>
            </div>
        )
    }
}
export default Classe;