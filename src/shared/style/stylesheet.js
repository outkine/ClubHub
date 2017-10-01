import { css } from 'glamor'

export default function (definitions) {
  let style = {}
  for (let key in definitions) {
    style[key] = css(definitions[key])
  }
  return style
}
