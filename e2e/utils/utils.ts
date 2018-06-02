import { promise as wdpromise } from 'selenium-webdriver';
import { TableDefinition } from 'cucumber';

/**
 * Convert selenium promise to a ES6 promise
 */
export function convertToES6Promise<T>(promise: wdpromise.Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => promise.then(resolve, reject));
}

/**
 * Transform a cucumberjs data table to an Array
 *
 * @param {TableDefinition} table Cucumber object with methods that can be used to access the provided data
 * @example
 * <pre>
 *     // insert from featurefile
 *     Given a table step
 *          | Vegetable | Rating |
 *          | Apricot   | 5      |
 *          | Broccoli  | 2      |
 *          | Cucumber  | 10     |
 *
 *      // returns
 *      const result = [
 *          {'Vegetable': 'Apricot', 'Rating': '5'},
 *          {'Vegetable': 'Broccoli', 'Rating': '2'},
 *          {'Vegetable': 'Cucumber', 'Rating': '10'}
 *      ];
 * </pre>
 *
 * @return {Array}
 */
export function transformDataTableToArray(table: TableDefinition): Array<{ [colName: string]: string }> {
  return table.hashes();
}
