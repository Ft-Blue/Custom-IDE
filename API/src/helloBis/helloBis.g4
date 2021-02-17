grammar helloBis;

root: greetings+;
greetings: HELLO ID;

HELLO: 'hello';
ID: [a-zA-z]+;
WS: [ \t\r\n] -> skip;