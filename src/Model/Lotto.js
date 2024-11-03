import { Console } from '@woowacourse/mission-utils';
import Validation from '../Contoller/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.validateSixNumbers(numbers);
    numbers.forEach((number) => {
      Validation.validateIsNumber(number);
      Validation.validatePositiveInteger(number);
      Validation.validateNumberInRange(number);
    });
    Validation.validateUniqueNumbers(numbers);
  }

  showLottoNumber() {
    Console.print(this.#numbers);
  }

  countMatchedWinningNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number))
      .length;
  }

  hasBunusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
