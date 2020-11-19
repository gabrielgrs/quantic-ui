import { lighten, darken } from 'polished'

export default (baseColors) =>
  Object.keys(baseColors).reduce(
    (arr, curr) => ({
      ...arr,
      [curr]: baseColors[curr],
      [`${curr}Light`]: lighten(0.05, baseColors[curr]),
      [`${curr}Dark`]: darken(0.05, baseColors[curr]),
    }),
    {}
  )
