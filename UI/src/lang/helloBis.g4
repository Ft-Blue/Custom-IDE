grammar helloBis;

root: HELLO ID;

HELLO: 'hello';
ID: [a-zA-z]+;
WS: [ \t\r\n] -> skip;