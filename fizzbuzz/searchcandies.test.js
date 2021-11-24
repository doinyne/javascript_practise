const searchCandies = require('./searchcandies');

describe('searchcandies', () => {
  it ('returns maltesers and mars for searching Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Maltesers', 'Mars' ]);
  });
  it ('returns mars for searching Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });
  it ('returns Skitties, Skittles and Starburst for searching S and 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });
  it ('returns Skitties and Skittles for searching S and 4', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
  it ('returns Skitties and Skittles for searching s and 4', () => {
    expect(searchCandies('s', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});