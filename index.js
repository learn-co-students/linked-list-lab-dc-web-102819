function getName(node) {
    return node['name']
}

function headNode(headKey, collection) {
    return collection[headKey]
}

function next(node, collection) {
    return collection[node['next']]
}

function nodeAt(position, headKey, collection) {
    let i = 0
    let node = headNode(headKey, collection)
    while (i < position) {
        node = next(node, collection)
        i++
    }
    return node
}

function addressAt(position, headKey, collection) {
    if (position > 0) {
        return nodeAt(position - 1, headKey, collection)['next']
    } else {
        return headKey
    }
}

function indexAt(node, collection, headKey) {
    let index = 0
    let presentNode = headNode(headKey, collection)
    
    while (presentNode['next'] && nodeAt(index, headKey, collection)['next'] !== node['next']) {
        index++
        presentNode = next(presentNode, collection)
    }
    
    return index
}

function insertNodeAt(position, newKey, headKey, collection) {
    const restructuredPointer = nodeAt(position - 1, headKey, collection)['next']
    collection[newKey]['next'] = restructuredPointer 
    nodeAt(position -1, headKey, collection)['next'] = newKey
}

function deleteNodeAt(position, headKey, collection) {
    const replacementPointer = nodeAt(position, headKey, collection)['next']
    nodeAt(position - 1, headKey, collection)['next'] = replacementPointer
}