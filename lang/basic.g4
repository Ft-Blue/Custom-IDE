grammar basic;

root: YARN inst ID;

inst: ADD | DELETE;

YARN: 'yarn';
ADD: 'add';
DELETE: 'delete';
ID: [_a-z][_a-z0-9]*;

WS: [ \t\r\n] -> skip;