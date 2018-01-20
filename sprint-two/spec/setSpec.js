describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });
  
  it('should not re-add duplicate values', function() {
    set.add(4);
    set.add(5);
    set.add(5);
    set.remove(5);
    expect(set.contains(5)).to.equal(false);
  });
  
  it('should handle numeric values', function() {
    set.add(4);
    set.add(5);
    set.add(5);
    set.remove(5);
    expect(set.contains(5)).to.equal(false);
  });
  
  it('should handle input objects of any type', function() {
    var obj1 = {a: 'b'};
    var obj2 = {b: 'c'};
    set.add(obj1);
    set.add(obj2);
    set.remove(obj2);
    expect(set.contains(obj1)).to.equal(true);
    expect(set.contains(obj2)).to.equal(false);
  });

});
