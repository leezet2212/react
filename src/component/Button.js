import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ color, text, onClick }) => {

    return <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>{text}</button>
}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}
