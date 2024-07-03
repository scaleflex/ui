const findAllMatches = (str: string = '', regex: RegExp) => {
  const output = [];
  let tmpResult;

  while ((tmpResult = regex.exec(str)) !== null) {
    output.push({
      startIndex: tmpResult.index,
      endIndex: regex.lastIndex,
      match: tmpResult[0]
    });
  }

  return output;
}

export { findAllMatches }
