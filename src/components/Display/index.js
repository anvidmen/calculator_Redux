import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

const Display = ({ value }) => <div className='display' readOnly>{value}</div>

Display.propTypes = {
  value: PropTypes.string
}

Display.defaultProps = {
  value: '0'
}

export { Display }
