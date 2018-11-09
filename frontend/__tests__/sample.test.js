// describe is a global, see Jest Docs > API Reference > Globals
// groups together related tests
describe('sample test 101', () => {
  //  test() === it()
  it('works as expected', () => {
    expect(1).toEqual(1);
  });

  it('handles ranges just fine', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  // 'it' -> 'xit' skips test
  // 'it' -> 'fit' only run this test
  it('makes a list of doggos', () => {
    const dogs = ['snickers', 'coco'];
    expect(dogs).toEqual(dogs);
    expect(dogs).toContain('snickers');
  });
});

// useful debugging tool:
// console.log(desiredVariable.debug());
// this will display the rendered DOM in the terminal
