function generateHashtag (str) {
    if (str == "") {
      return false;
    }
    str = "# " + str;
    let result = str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    if (result === "" || result === "#" || result.length > 140) {
        return false;
    }
    return result;
  };
  