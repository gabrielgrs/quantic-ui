import { css } from 'styled-components'

const tipographies = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  size: {
    xs: '12',
    sm: '14',
    md: '16',
    lg: '20',
    xl: '24',
    xxl: '32'
  }
}

const colors = {
  primary: '#003C69',
  secondary: '#263DC2',
  grey: '#757575',
  darkGrey: '#B0B0B0',
  white: '#FFFFFF',
  success: '#5ACC5A',
  warning: '#FFC247',
  danger: '#CC001B'
}

const transitions = {
  default: (prop = 'all', time = 200, easing = 'ease') => css`
    transition: ${prop} ${time}ms ${easing};
  `
}

const opacities = {
  default: 0.5,
  loading: 0.8
}

export default {
  tipographies,
  colors,
  transitions,
  opacities
}
