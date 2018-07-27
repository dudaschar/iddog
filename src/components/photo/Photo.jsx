import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


let token = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpZGRvZy1zZXJ2aWNlIiwic3ViIjoiNWIzNjM3OGQ1YTk0MDE1OGQzYTVjY2Q2IiwiaWF0IjoxNTMwMjc5ODIxLCJleHAiOjE1MzE1NzU4MjF9.VZKuxdjL9iEsydpiHTN6Nl3IR1cFVWu1r4fUgTf7bpo';

const apiUrl = 'https://api-iddog.idwall.co/feed?category=husky'
const configFetch = (token) => ({
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
    },
})

console.log(token)

class Photo extends Component {
    constructor() {
        super()
        this.state = {
            pictures: [],
        }
    }

    componentDidMount() {
    const data = fetch(apiUrl, configFetch(token))
        .then(responses =>  {
            return responses.json()
            console.log(responses)
        })
    };

    render() {
        return (
            <div><p>teste</p></div>
        )
       
    }

}


// const Photo = ({ img, alt, url }) => {
//     return (
//         <div className="photo">
//             <Link to={url}>
//                 <img src={img} alt={alt}/>
//             </Link>
//         </div>
//     )
// }

// Photo.propTypes = {
//     img: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired
// }

export default Photo