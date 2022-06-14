import PropTypes from 'prop-types'

const Button = ({color, text}) => {
  return (
    <button style={{backgroundColor: color}}>{text}</button>
  )
}


Button.defaultProps ={
    color: 'gray'
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button