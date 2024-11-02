import Validation from '../src/Contoller/Validation.js';

describe('Validation 테스트', () => {
  test('구매 금액이 1000원 단위가 아니면 예외가 발생한다', () => {
    expect(() => {
      Validation.validateThousandUnit(1500);
    }).toThrow('[ERROR] 구매 금액은 1000원 단위여야 합니다.');

    expect(() => {
      Validation.validateThousandUnit(1000);
    }).not.toThrow();
  });

  test('입력값을 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateNotEmpty('');
    }).toThrow('[ERROR] 입력값이 없습니다.');

    expect(() => {
      Validation.validateNotEmpty(1000);
    }).not.toThrow();
  });

  test('로또 번호가 6개가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateSixNumbers([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();

    expect(() => {
      Validation.validateSixNumbers([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');

    expect(() => {
      Validation.validateSixNumbers([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateUniqueNumbers([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();

    expect(() => {
      Validation.validateUniqueNumbers([1, 2, 3, 4, 4, 5]);
    }).toThrow('[ERROR] 중복되는 번호가 존재합니다.');
  });

  test('번호가 양의 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validatePositiveInteger(5);
    }).not.toThrow();

    expect(() => {
      Validation.validatePositiveInteger(6.8);
    }).toThrow('[ERROR] 모든 숫자는 양의 정수여야 합니다.');

    expect(() => {
      Validation.validatePositiveInteger(-1);
    }).toThrow('[ERROR] 모든 숫자는 양의 정수여야 합니다.');
  });

  test('번호가 1과 45 사이 값이 아니라면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateNumberInRange(30);
    }).not.toThrow();

    expect(() => {
      Validation.validateNumberInRange(50);
    }).toThrow('[ERROR] 모든 숫자는 1부터 45 사이여야 합니다.');
  });
});
