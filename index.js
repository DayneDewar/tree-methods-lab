const inOrder = (node) => {
    if (node.left) {
        inOrder(node.left)
    }
    console.log(node.data)
    if (node.right) {
        inOrder(node.right)
    }
}

const findOrAdd = (root, node) => {
    if (root.data > node.data) {

        if (root.left) {
            return findOrAdd(root.left, node)
        } else {
            root.left = node
        }
    }

    if (root.data < node.data) {

        if (root.right) {
            return findOrAdd(root.right, node)
        } else {
            root.right = node
        }
    }
    else return true
}

const max = (root) => {
    if (root.right) {
        return max(root.right)
    }
    return root
}

const min = (root) => {
    if (root.left) {
        return min(root.left)
    }
    return root
}