import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from '../styles/components'

const Header = () => (
  <StyledHeader>
    <Link to='/'>
      <img src='https://postimg.cc/MMCwjTb6' alt='logoplatzistore' />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to='/'>Productos</Link>
        </MenuItem>
        <MenuItem margin>
          <a href='https://www.platzi.com/'>Platzi</a>
        </MenuItem>
        <MenuItem>
          <Link to='/cart'>
            <span>
              <img src='https://postimg.cc/mtYqYNdk' alt='cartlogo' />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
