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
  boxShadow: '0 0 10px 1px rgba(0, 0, 0, .3)'
}

const colors = {
  red: '#F81B84',
  blue: '#43C0F6',
  yellow: '#F5CE28'
}

const button = {
  ':hover': {
    filter: 'brightness(0.9)'
  },

  ':active': {
    boxShadow: 'inset ' + shadow.boxShadow
  }
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
  search: {
    ...box,
    backgroundColor: colors.yellow,
    width: '100%',
    marginTop: 50,
  },

  searchOptions: {
    ...box,
    ...grid.row,
    backgroundColor: colors.yellow,
    width: '80%',
    marginTop: 10,

    '& label': {
      ...button,
      margin: 5
    },

    '& input': {
      display: 'none'
    }
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    margin: 10
  },

  'results': {
    '& > *': {
      ...box,
      backgroundColor: colors.blue,
    }
  },

  header: {
    ...shadow,
    border: `3px solid ${colors.red}`,
    padding: 10,
  },

  headerText: {
    color: colors.red,
    ...fonts.bold,
    textDecoration: 'none'
  }
})
