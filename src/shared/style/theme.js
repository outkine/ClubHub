import grid from './grid'
import stylesheet from './stylesheet'
import globals from './globals'

const colors = {
  red: '#F81B84',
  blue: '#43C0F6',
  yellow: '#F5CE28',
  white: '#F2EEE2',
  black: '#1E1E1E'
}

const fonts = {
  regular: {
    fontFamily: 'Montserrat'
  },

  bold: {
    fontWeight: 700,
    fontFamily: 'Montserrat'
  }
}

const shadow = {
  boxShadow: '0 0 5px 1px rgba(0, 0, 0, .3)'
}

const box = {
  ...grid.horizontalCenter,
  ...fonts.regular,
  ...shadow,
  color: 'white',
  border: 0,
  textAlign: 'center',
  fontSize: 20,
  padding: 10
}

globals({
  'html, body, #app, [data-reactroot]': {
    height: '100%'
  },

  body: {
    margin: 0,
    backgroundColor: colors.white
  },

  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },

  'input:focus': {
    outline: 'none'
  }
})

export default stylesheet({
  header: {
    ...shadow,
    border: `3px solid ${colors.red}`,
    padding: 10,
  },

  headerText: {
    color: colors.red,
    ...fonts.bold,
    textDecoration: 'none'
  },


  search: {
    ...box,
    color: colors.black,
    border: '3px solid ' + colors.yellow,
    width: '90%',
    marginTop: 30,
    backgroundColor: colors.white
  },

  searchOptions: {
    ...box,
    ...grid.row,
    backgroundColor: colors.yellow,
    marginTop: 10,
    width: '90%',

    '& input + span': {
      backgroundColor: colors.yellow,
      margin: 8,
      border: '2px solid white',
      padding: 3,
      fontSize: 15,
      userSelect: 'none'
    },

    '& input:checked + span': {
      backgroundColor: 'white',
      color: colors.yellow
    },

    '& input': {
      display: 'none'
    }
  },

  'results': {
    ...grid.horizontalCenter,
    width: '80%',
    marginTop: 30,
    userSelect: 'none',

    '& > *': {
      ...box,
      padding: 2,
      backgroundColor: colors.blue,
      marginBottom: 10
    }
  },

  'resultHeading': {
    padding: 10
  },

  'resultBody': {
    padding: 5,
    backgroundColor: colors.white,
    textAlign: 'left',
    color: 'black'
  }
})
