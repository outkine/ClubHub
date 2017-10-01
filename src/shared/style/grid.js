import stylesheet from './stylesheet'

export default stylesheet({
  "col": {
    "display": "flex",
    "justifyContent": "space-evenly",
    "flexDirection": "column"
  },
  "row": {
    "display": "flex",
    "justifyContent": "space-evenly",
    "flexDirection": "row"
  },
  "el2": {
    "flex": "0 0 50%"
  },
  "el3": {
    "flex": "0 0 33.33%"
  },
  "el4": {
    "flex": "0 0 25%"
  },
  "el5": {
    "flex": "0 0 20%"
  },
  "el6": {
    "flex": "0 0 16.67%"
  },
  "el8": {
    "flex": "0 0 12.5%"
  },
  "relative": {
    "position": "relative"
  },
  "absolute": {
    "position": "absolute"
  },
  "center": {
    "position": "absolute",
    "margin": "auto",
    "right": "0",
    "left": "0",
    "top": "0",
    "bottom": "0"
  },
  "verticalCenter": {
    "display": "flex",
    "justifyContent": "center",
    "flexDirection": "column",
    "height": "100%"
  },
  "horizontalCenter": {
    "margin": "0 auto",
    "display": "block"
  }
})
