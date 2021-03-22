import React from 'react';
import './Item.css';

class Item extends React.Component{
    constructor(props){
    super(props);
    this.state = {
    stars: []
    };
}
render(){

return (
<div className="item">
<div className="image" ><img src={'img/' + this.props.image }alt="" width="100%" /></div>
<div className="title" >{this.props.title}</div>
<div className="rating">
Rating:
<select value={this.props.rating}>
<options value="1">1</options>
<options value="2">2</options>
<options value="3">3</options>
<options value="4">4</options>
<options value="5">5</options>
</select>
</div>
<div className="actions">
<button onClick={this.onremove}>Remove</button>
</div>
</div>
); }}

export default Item;
