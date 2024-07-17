function array_diff(a, b) {
    let new_arr = a.filter( element => !b.includes(element) )
    return new_arr
  }