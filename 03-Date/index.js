let x;
d = new Date();
x = d.getMonth() + 1;
x = d.getTime();
x = d.getDay();
x = d.getTime();
// x = `{ ${x.getMonth()+1}}`;
x = Intl.DateTimeFormat('default').format(d);
x = d.toLocaleString('default', {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  seconds: 'numeric',
});
console.log(x);
