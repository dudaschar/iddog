import React, {Component} from 'react'
import Header from '../../components/header/Header'
import Photo from '../../components/photo/Photo'

import Dog from '../feed/img/dog.jpg'

class Feed extends React.Component {
    render() {
        return (
            <div className="feed">
                <Header />
                <Photo />
            </div>
        )
    }
}

export default Feed