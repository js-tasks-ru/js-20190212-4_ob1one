let calendar = {
  from: new Date('2018-01-01T15:09:10Z'),
  to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
  let from = this.from;
  let to = this.to;
  return {
    next() {
      if (from <= to) {
        const currentTime = from.setDate(from.getDate() + 1);
        if (from.getDay() === 6 || from.getDay() === 0) {
          return {
            done: false,
            value: from.getDate() < 10 ? `[0${from.getDate(currentTime)}]` : `[${from.getDate(currentTime)}]`
          }
        } else {
          return {
            done: false,
            value: from.getDate() < 10 ? `0${from.getDate(currentTime)}` : `${from.getDate(currentTime)}`
          }
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
};
