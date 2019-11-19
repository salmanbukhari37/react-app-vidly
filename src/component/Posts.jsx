import React, { Component } from "react";
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class Posts extends Component {
    
    state = {
        posts: [
            { id: 1, title: "2019/08", year: "2019", month: "08"},
            { id: 2, title: "2018/06", year: "2018", month: "06"}
        ]
    };

    getYearMonth = ({match, location}) => {
        const { year, month } = match.params;

        const result = queryString.parse(location.search);
        
        console.log(result.sortBy);
        
        return (
             year || month ? `Year: ${year}, Month: ${month}` : 'No date found.'
        );
    }
    
    render() { 
        const { posts } = this.state;

        return (
            <div>
                <h1>Posts</h1>
                <ul>
                    { posts.map( post => <Link to={`/posts/${post.year}/${post.month}`} key={`${post.id}+${post.year}`}><li>{post.title}</li></Link>) }
                </ul>
                {this.getYearMonth(this.props)}
            </div>
        );
    }
}
 
export default Posts;