const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    if (this.rootNode === null) {
      return null;
    } else {
      return this.rootNode;
    }
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      let node = this.rootNode;

      while(node) {
        if (node.left === null && node.data > data) {
          node.left = new Node(data);
          node = null;
        } else if (node.right === null && node.data < data) {
          node.right = new Node(data);
          node = null;
        } else if (node.data > data){
          node = node.left;
        } else {
          node = node.right;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return create(this._root, data);

    function create(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? create(node.left, data) : create(node.right, data);
    }
  }

  remove(data, node = this.treeRoot) {
    if (!node || !this.has(data)) {
      return null
    }

    if (data < node.data) {
      node.left = this.remove(data, node.left)
    } else if (data > node.data) {
      node.right = this.remove(data, node.right)
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      } else {
        node.data = this.min(node.right)
        node.right = this.remove(node.data, node.right)
      }
    }
    return node
  }

  min() {
    let minNode = this.rootNode;

    while(minNode.left !== null) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    let maxNode = this.rootNode;

    while(maxNode.right !== null) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};