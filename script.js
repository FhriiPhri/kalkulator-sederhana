function hitung() {
  var angka1 = parseInt(document.getElementById('angka1').value);
  var angka2 = parseInt(document.getElementById('angka2').value);
  var operator = document.getElementById('operator').value;
  var body = document.querySelector('body');
  var hasil = 0;
  
  if (operator == '+') {
      hasil = angka1 + angka2;
  } if (operator == '-') {
      hasil = angka1 - angka2;
  } if (operator == '*') {
      hasil = angka1 * angka2;
  } if (operator == ':') {
    hasil = angka1 / angka2;
  } else if (operator == 'Pangkat') {
    hasil = angka1 ** angka2;
  }

  var hasilOp = document.getElementById('hasil');
  hasilOp.textContent = 'Hasil : ' + hasil;

  if (hasil % 2 === 0) {
      body.style.backgroundColor = 'blue';
  } else {
      body.style.backgroundColor = 'red';
  }
}