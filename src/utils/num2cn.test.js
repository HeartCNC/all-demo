import { num2cn } from './num2cn'

const tests = [
  [1, '一'],
  [10, '十'],
  [11, '十一'],
  [110011, '十一万零一十一'],
  [20, '二十'],
  [102, '一百零二'],
  [2000, '两千'],
  [2012, '两千零一十二'],
  [2002000200, '二十亿零二百万零二百'],
  [10000000000, '一百亿'],
  [10000000001, '一百亿零一'],
  [10000000011, '一百亿零一十一'],
  [12004004002, '一百二十亿零四百万零四千零二'],
  [12002004002, '一百二十亿零二百万零四千零二'],
  [12002004020, '一百二十亿零二百万零四千零二十'],
  [2222222222, '二十二亿两千二百二十二万两千二百二十二'],
  [2202222222, '二十二亿零二百二十二万两千二百二十二'],
  [2022.22, '两千零二十二点二二']
]

tests.forEach(([p, r]) => {
  test(String(p), () => {
    expect(num2cn(p)).toBe(r);
  });
})
