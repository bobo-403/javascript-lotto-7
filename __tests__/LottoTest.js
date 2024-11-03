import Lotto from '../src/Model/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 중복되는 번호가 존재합니다.');
  });

  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, NaN, 5, 6]);
    }).toThrow('[ERROR] 숫자로 입력해야 합니다.');
  });

  test('로또 번호에서 당첨 번호를 포함하는 개수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const WINNING_NUMBER = [1, 2, 3, 7, 8, 9];
    expect(lotto.countMatchedWinningNumbers(WINNING_NUMBER)).toEqual(3);
  });

  test('로또 번호에서 보너스 번호를 포함하면 true를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const BONUS_NUMBER = 4;
    expect(lotto.hasBunusNumber(BONUS_NUMBER)).toBeTruthy();
  });
});
