import React, { Component } from "react";
import type Book from "./Book";

interface BookListProps{
    books:Array<Book>,
    initialCount:number,
}

interface LikeState{
    Likes:number,
}

class BookList extends Component<BookListProps, LikeState>
{
    static defaultProps: Partial<BookListProps> = {
    initialCount: 0,
  };

  // Конструктор з ініціалізацією стану
  constructor(props: BookListProps) {
    super(props);

    this.state = {
      Likes: props.initialCount,
    };
  }
}