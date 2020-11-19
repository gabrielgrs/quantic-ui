import React from 'react'
import PropTypes from 'prop-types'
import * as antDesignIcons from 'react-icons/ai'
import * as featherIcons from 'react-icons/fi'

function Icon({ name, category, id, ...rest }) {
  const iconsCategory = {
    antDesign: antDesignIcons,
    feather: featherIcons,
  }

  const IconToRender = iconsCategory[category][name]
  return <IconToRender id={id} {...rest} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  id: PropTypes.string,
}

Icon.defaultProps = {
  category: 'antDesign',
  id: 'icon',
}

export default Icon
