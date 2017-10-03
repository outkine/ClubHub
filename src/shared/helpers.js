export const generateId = (() => {
  let i = 0
  return (() => {
    i++
    return String(i)
  })
})()


export const getEventValue = (target) => (
  target.type === 'checkbox' ? target.checked : target.value
)
