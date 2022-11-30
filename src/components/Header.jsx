import React from 'react';


class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={favoriteColor:'red'}
    }

    static getDerivedStateFromProps(props,state){
        return{favoriteColor:props.favCol}
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({favoriteColor:"yellow"})
        }, 1000)
    }


    render(){
        return(
            <h1>Mi color favorito es {this.state.favoriteColor}</h1>
        )
    }
}

ReactDom.render(<Header/>, document.getElementById('root'))