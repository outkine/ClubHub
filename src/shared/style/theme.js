import grid from './grid'
import stylesheet from './stylesheet'

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

const colors = {
  red: '#F81B84',
  blue: '#43C0F6',
  yellow: '#F5CE28'
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
    color: colors.yellow,
    border: '3px solid ' + colors.yellow,
    width: '90%',
    marginTop: 50,
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
      backgroundColor: colors.blue,
      marginBottom: 10
    }
  },
})
