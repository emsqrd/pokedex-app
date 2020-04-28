import { PokeStringFilter } from './pokefilter.pipe';

describe('FlavorTextFilter', () => {
  it('create an instance', () => {
    const pipe = new PokeStringFilter();
    expect(pipe).toBeTruthy();
  });
});
