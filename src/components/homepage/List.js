import React from 'react';

export default class List extends React.Component{
    render(){
        return (
            <div>
                {this.props.items.map((item , i) => {
                    let {title, imageLinks , previewLink} = item.volumeInfo
                    return (
                        <a href ={ previewLink }
                        target = "_blank"
                        key={i} className = "book">
                        <img 
                        src ={ imageLinks !== undefined? imageLinks.thumbnail : '' } 
                        alt = "book image"
                        className = "bookImage"
                        />
                        <div className = "titleText">{ title }</div>
                        </a>
                    );     
                })
            }</div>
        );
    }
}