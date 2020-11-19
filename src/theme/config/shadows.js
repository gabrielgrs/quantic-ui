import { rgba } from 'polished'
import colors from './colors'

export default {
  box: {
    soft: '0px 0px 4px 0px rgba(0,0,0,0.50)',
    medium: '0px 0px 8px 0px rgba(0,0,0,0.50)',
    hard: '0px 0px 10px 0px rgba(0,0,0,0.50)',
    navbar: '0px 3px 10px 0px rgba(0, 0, 0, 0.5);',
    field: `0px 1px 10px 0px ${rgba(colors.primary, 0.5)}`,
  },
}
