// Place your playground code here.
function listToTree(data) {
  const list = data;
  const map = {};
  let node;
  const roots = [];
  let i;
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parentId !== '0') {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[node.parentId]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

const entries = [
  {
    id: '12',
    parentId: '0',
    children: null,
  },
  {
    id: '6',
    parentId: '12',
    children: null,
  },
  {
    id: '7',
    parentId: '12',
    children: null,
  },
  {
    id: '9',
    parentId: '0',
    children: null,
  },
  {
    id: '11',
    parentId: '9',
    children: null,
  },
];

console.log(listToTree(entries));
