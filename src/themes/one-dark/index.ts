import colors from './colors'
import { Theme } from '../../types'
import uiColors from './ui-colors'
import tokenColors from './token-colors'
import semanticTokenColors from './semantic-token-colors'
import { config } from '../../packageJson'

export default {
  label: config.themeNamePrefix + ' One Darken',
  uiTheme: 'vs-dark',

  colors: uiColors(colors),
  tokenColors: tokenColors(colors),

  semanticHighlighting: true,
  semanticTokenColors: semanticTokenColors(colors),
} as Theme.Theme
