import type { ReactNode } from "react"
import React, { Component } from "react";

interface BookProps {
    image?:string,
    name?:string,
    price?:number,
    characteristics?:string,
    ISBN:number,
    initialCount:number,
    title:string,
    onCounterChange?:(count: number) => void;
    children?:ReactNode
};

interface LikeState{
    count:number,
}

class Book extends Component<BookProps, LikeState>{
    static defaultProps: Partial<BookProps> = {
    initialCount: 0,
    onCounterChange: undefined, 
  };
  constructor(props: BookProps) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  componentDidUpdate(prevProps: BookProps, prevState: LikeState) {
      if (this.props.onCounterChange) {
        this.props.onCounterChange(this.state.count);
      }
  }

  increment = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { title } = this.props;
    const { count } = this.state;
    return(
        <div style={{width:300, height:600, padding:10, margin:10}}>
            <img src={this.props.image}></img>
            <h2>{this.props.name}</h2>
            <h4>{this.props.price}</h4>
            {this.props.children}
            <p>{this.props.characteristics}</p>
            <p>{count}</p>
            <button onClick={this.increment}></button>
        </div>
    )
  }   
}
export default Book