"use strict";

const leftJoin = require('../hashmap-left-join.js');

describe('leftJoin function', () => {
  it('should left join two hash maps correctly', () => {
    const leftMap = new Map();
    leftMap.set('happy', 'joyful');
    leftMap.set('sad', 'unhappy');
    leftMap.set('smart', 'intelligent');

    const rightMap = new Map();
    rightMap.set('happy', 'unhappy');
    rightMap.set('smart', 'dumb');
    rightMap.set('exciting', 'boring');

    const result = leftJoin(leftMap, rightMap);

    expect(result.get('happy')).toEqual(['joyful', 'unhappy']);
    expect(result.get('sad')).toEqual(['unhappy', null]);
    expect(result.get('smart')).toEqual(['intelligent', 'dumb']);
  });

});
