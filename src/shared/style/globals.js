import { css } from 'glamor'

export default function (definitions) {
  Object.keys(definitions).forEach((key) => {
    css.global(key, definitions[key])
  })
}
