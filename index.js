let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
ntrandm: {name: 'Juliet', next: null}
}

function getName(node) {
    return node.name
}

function headNode(list, collection) {
    return collection[list]
}

function next(node, collection) {
    let nextNodeKey = node.next
    return collection[nextNodeKey]
}

function nodeAt(index, list, collection) {
    let currentNode = headNode(list, collection)
    for ( let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

function addressAt(index, list, collection) {
    if (index == 0) {
        return list
    } else {
        let node = nodeAt(index - 1, list, collection)
        return node.next
    }
}

function indexAt(node, collection, list) {
    let index = 0
    let currentNode = headNode(list, collection)
     while (currentNode != node) {
         index++
         currentNode = next(currentNode, collection)
     }
     return index
}


function insertNodeAt(index, newNodeAddress, list, collection) {
    let previousNode = nodeAt(index -1, list, collection)
    let followingNodeAddress = addressAt(index, list, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = followingNodeAddress
}

function deleteNodeAt(index, list, collection) {
    let previousNode = nodeAt(index -1, list, collection)
    let followingNodeAddress = addressAt(index + 1, list, collection)

    previousNode.next = followingNodeAddress
}