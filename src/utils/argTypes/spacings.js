import theme from '../../theme'

export default {
  control: {
    type: 'select',
    options: Object.keys(theme.spacings),
  },
}
