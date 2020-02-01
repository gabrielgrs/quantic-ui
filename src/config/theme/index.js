const tipographies = {
  type: {
    primary: 'Courier New, Courier, monospace'
  },
  weight: {
    regular: 400,
    bold: 600,
    extrabold: 800,
    black: 900
  },
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 22
  }
}

const colors = {
  primary: '#1890ff',
  secondary: '#263DC2',
  grey: '#B0B0B0',
  darkGrey: '#757575',
  lightSilver: '#ECEFF1',
  white: '#FFFFFF',
  success: '#5ACC5A',
  warning: '#FFC247',
  danger: '#CC001B'
}

const opacities = {
  default: 0.5,
  soft: 0.8
}

const shadows = {
  box: {
    soft: '0px 0px 2px 0px rgba(0,0,0,0.75)',
    medium: '0px 0px 4px 0px rgba(0,0,0,0.75)',
    hard: '0px 0px 7px 0px rgba(0,0,0,0.75)'
  }
}

const border = {
  radius: 4
}

export default {
  tipographies,
  colors,
  opacities,
  shadows,
  border
}
