import { urls } from '.';

describe('Urls utils', () => {
  test('should return the url of a board by id', () => {
    const id = 1;
    const expected = '/board/' + id;
    const actual = urls.getBoardUrlById(id);
    expect(actual).toEqual(expected);
  });

  test('should return the url of a team by id', () => {
    const id = 1;
    const expected = '/team/' + id;
    const actual = urls.getTeamUrlById(id);
    expect(actual).toEqual(expected);
  });
});
