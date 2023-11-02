"use strict";

const rightJoin = require('../hashmap-right-join.js');

describe('rightJoin function', () => {
  it('should right join two hash maps correctly', () => {
    const leftMap = new Map();
    leftMap.set('happy', 'joyful');
    leftMap.set('sad', 'unhappy');
    leftMap.set('smart', 'intelligent');

    const rightMap = new Map();
    rightMap.set('happy', 'unhappy');
    rightMap.set('smart', 'dumb');
    rightMap.set('exciting', 'boring');

    const result = rightJoin(leftMap, rightMap);

    expect(result.get('happy')).toEqual(['joyful', 'unhappy']);
    expect(result.get('smart')).toEqual(['intelligent', 'dumb']);
    expect(result.get('exciting')).toEqual([null, 'boring']);
  });

});
