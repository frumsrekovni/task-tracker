import PropTypes from 'prop-types'
import Button from './Button.tsx'
const Header = ({title}) => {
  return (
   <header>
    <h1 style= {headerStyle}>{title}</h1>
    <Button color='pink' text='Add task'></Button>
   </header>
  )
}

// You can set default values in case it is not set in the main app.
Header.defaultProps = {
  title: "Title Not Set"
}

Header.propTypes = {
  title: PropTypes.string,
}

// This is heresy. Mixing typescript, html and CSS like this.
// how low have we fallen
const headerStyle = {
    color: 'green',
    backgroundColor: 'red'
}

export default Header