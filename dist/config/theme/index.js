var tipographies = {
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
};
var colors = {
  primary: '#1890ff',
  secondary: '#263DC2',
  grey: '#757575',
  darkGrey: '#B0B0B0',
  white: '#FFFFFF',
  success: '#5ACC5A',
  warning: '#FFC247',
  danger: '#CC001B'
};
var opacities = {
  default: 0.5,
  soft: 0.8
};
var shadows = {
  box: {
    soft: '0px 0px 2px 0px rgba(0,0,0,0.75)',
    medium: '0px 0px 4px 0px rgba(0,0,0,0.75)',
    hard: '0px 0px 7px 0px rgba(0,0,0,0.75)'
  }
};
var border = {
  radius: 4
};
export default {
  tipographies: tipographies,
  colors: colors,
  opacities: opacities,
  shadows: shadows,
  border: border
};