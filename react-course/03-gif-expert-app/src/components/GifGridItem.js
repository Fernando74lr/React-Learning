import PropTypes from 'prop-types'
import React from 'react'

const GifGridItem = ({title,url }) => {
    return (
        <div>
            <h3>{ title }</h3>
            <img src={ url } alt={ title } />
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem
