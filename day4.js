const isRepeatedNumber = ([first, ...rest], numMatches = 0) => {
  if (rest.length === 0) { return numMatches === 1; }
  if (first === rest[0]) {
    return isRepeatedNumber(rest, numMatches + 1);
  }
  return numMatches === 1 || isRepeatedNumber(rest, 0);
};

const isAscendingNumber = ([first, ...rest]) => {
  if (rest.length === 0) { return true; }
  return first <= rest[0] ? isAscendingNumber(rest) : false;
};

const isPwdCandidate = (pwdNum) => (
  isRepeatedNumber(pwdNum.toString().split(''))
    && isAscendingNumber(pwdNum.toString().split(''))
);

const numPwdCandidates = (start, end) => {
  let num = 0;
  for (let i = start; i <= end; i += 1) {
    if (isPwdCandidate(i)) { num += 1; }
  }
  return num;
};

module.exports = {
  isPwdCandidate,
  numPwdCandidates,
};
