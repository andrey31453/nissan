const not_init = (arg) => {
  return !arg || !arg.includes('init')
}

export default (arg, cb) => {
  if (not_init(arg)) return void 0

  cb()
}
