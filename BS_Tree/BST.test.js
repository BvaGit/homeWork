
const { test } = require('picomatch');
var BST = require('./BST')
var Node = require('./TreeNode')

describe('BST', function(){
  it('should be defined', function(){
    expect(BST).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof BST).toBe('function');
  })
  it('testInsert should be equal expectedTree', function(){
    var testInsert = new BST;
    testInsert.insert(5);
    testInsert.insert(8);
    testInsert.insert(4);
    var expectedTree = {
      root: { 
        data:5,
        left : {
          data: 4,
          left: null,
          right: null,
        },
        right : {
          data: 8,
          left: null,
          right: null,
        },
      },
      size: 3
    }
    expect(testInsert).toEqual(expectedTree);
  })
  it('should be throw error', function() {
    var testInsert = new BST;
    expect(function() {
      testInsert.insert(9.9)
    }).toThrow()
  })
  it('should be throw error', function() {
    var testInsert = new BST;
    expect(function() {
      testInsert.insert('why')
    }).toThrow()
  })

  it('testInit should be equal expectedTree', function(){
    var testInit = new BST();
    testInit.init([10,9,11]);
    var expectedTree = {
      root: { 
        data:10,
        left : {
          data: 9,
          left: null,
          right: null,
        },
        right : {
          data: 11,
          left: null,
          right: null,
        },
      },
      size: 3
    }
    expect(testInit).toEqual(expectedTree);
  })

  it('should be throw error', function() {
    var testInit = new BST();
    expect(function() {
      testInit.init(9)
    }).toThrow()
  })

  it('testClear should be equal expectedTree', function(){
    var testClear = new BST();
    testClear.init([10,9,11]);
    var expectedTree = {
      root: null,
      size: 0
    }
    testClear.clear()
  
    expect(testClear).toEqual(expectedTree);
  })

  it('testGetSize should be 3', function() {
    var testGetSize = new BST();
    testGetSize.init([10,9,11]);
      
    expect(testGetSize.getSize()).toBe(3);
  })

  it('testGetSize should be equal expectedTree', function() {
    var testGetSize = new BST();
    testGetSize.init([10,9,11]);
      
    expect(testGetSize.getSize()).toBe(3);
  })

  it('testToArray.toArray should be equal [ 4, 7, 8, 10 ]', function(){
    var testToArray = new BST();
    testToArray.insert(8);
    testToArray.insert(4);
    testToArray.insert(7);
    testToArray.insert(10);
          
    expect(testToArray.toArray()).toEqual([ 4, 7, 8, 10 ]);
  })

  it('testToArray.toArray should be equal [ 4, 7, 8, 10 ]', function() {
    var testToArray = new BST();
    testToArray.insert(8);
    testToArray.insert(4);
    testToArray.insert(7);
    testToArray.insert(10);
          
    expect(testToArray.toArray()).toEqual([ 4, 7, 8, 10 ]);
  })

  it('testSearch.search(10) should be equal expectedTree', function() {
    var testSearch = new BST();
    testSearch.insert(8);
    testSearch.insert(4);
    testSearch.insert(7);
    testSearch.insert(10);
    
    var expectedTree = {
      data: 10,
      left: null,
      right: null,
    }
          
    expect(testSearch.search(10)).toEqual(expectedTree);
  })

  it('testHeight.height() should be equal 3', function() {
    var testHeight = new BST();
    testHeight.insert(8);
    testHeight.insert(4);
    testHeight.insert(7);
    testHeight.insert(10);
          
    expect(testHeight.height()).toBe(3);
  })

  it('testWidth.width() should be equal 2', function() {
    var testWidth = new BST();
    testWidth.insert(8);
    testWidth.insert(4);
    testWidth.insert(7);
    testWidth.insert(10);
          
    expect(testWidth.width()).toBe(2);
  })

  it('testLeaves.leaves() should be equal 2', function() {
    var testLeaves = new BST();
    testLeaves.insert(8);
    testLeaves.insert(4);
    testLeaves.insert(7);
    testLeaves.insert(10);
          
    expect(testLeaves.leaves()).toBe(2);
  })

  it('testNodes.nodes() should be equal 2', function() {
    var testNodes = new BST();
    testNodes.insert(8);
    testNodes.insert(4);
    testNodes.insert(7);
    testNodes.insert(10);
          
    expect(testNodes.nodes()).toBe(2);
  })

  it('testReverse.reverse() should be equal 2', function() {
    var testReverse = new BST();
    testReverse.insert(8);
    testReverse.insert(4);
    testReverse.insert(7);
    testReverse.insert(10);
    testReverse.reverse();
    
    var expected = {
      root: {
        data: 8,
        left: {
          data: 10,
          left: null,
          right: null,
        },
        right: {
          data: 4,
          left: {
            data: 7,
            left: null,
            right: null
          },
          right: null,
        }
      },
      size: 4
    }
    expect(testReverse).toEqual(expected);
  })

  it('testMinNode.minNode() should be equal expected', function() {
    var testMinNode = new BST();
    testMinNode.insert(8);
    testMinNode.insert(4);
    testMinNode.insert(7);
    testMinNode.insert(10);
    
    var expected = {
      data: 4,
      left: null,
      right: {
        data: 7,
        left: null,
        right: null
      }
    }
    expect(testMinNode.minNode()).toEqual(expected);
  })

  it('testMaxNode.maxNode() should be equal expected', function() {
    var testMaxNode = new BST();
    testMaxNode.insert(8);
    testMaxNode.insert(4);
    testMaxNode.insert(7);
    testMaxNode.insert(10);
    
    var expected = {
      data: 10,
      left: null,
      right: null
    }
    expect(testMaxNode.maxNode()).toEqual(expected);
  })
  it('testRemove.remove(4) should be equal expected', function() {
    var testRemove = new BST();
    testRemove.insert(8);
    testRemove.insert(4);
    testRemove.insert(7);
    testRemove.insert(10);
    testRemove.remove(4);
    
    var expected = {
      root: {
        data: 8,
        left: {
          data: 7,
          left: null,
          right: null,
        },
        right: {
          data: 10,
          left: null,
          right: null,
        }
      },
      size: 3
    }
    expect(testRemove).toEqual(expected);
  })

})