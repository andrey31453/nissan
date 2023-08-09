const get_on_breakpoint = () => (b) => {
  console.log(b)
}

export default ({ visible_count, elem_count }) => {
  const on_breakpoint = get_on_breakpoint()

  return {
    on_breakpoint,
  }
}
