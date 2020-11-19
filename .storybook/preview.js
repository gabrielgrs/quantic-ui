import { addParameters, addDecorator } from '@storybook/react'
import { withTests } from '@storybook/addon-jest'
import results from '../src/__tests__/addon-results.json'
import withWrapper from './withWrapper'
import StorybookTheme from './theme'

addParameters({
  options: {
    theme: StorybookTheme,
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
  },
  html: {
    preventForcedRender: true,
  },
})

addDecorator(withTests({ results }))
addDecorator(withWrapper)
