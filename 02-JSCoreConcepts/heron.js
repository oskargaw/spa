// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7;
p = (a + b + c) / 2;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let heron = (a, b, c) => {
  let wynik = p * Math.sqrt((p - a) * (p - b) * (p - c));

  return wynik;
};

console.log(heron(a, b, c));
