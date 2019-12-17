function GetBaseLog (base, value) {
  return Math.log(value) / Math.log(base);
}
let string = "!!!!!!!!22";
let alphabet = [];
let number = 0;
let entropy = 0;
for (let i = 0; i < string.length; i++)
	alphabet[string.charAt(i)] = 0;
for (let i = 0; i < string.length; i++)
	console.log(alphabet[string.charAt(i)]++);//количество
for (let i in alphabet)
{
 		alphabet[i] = alphabet[i] / string.length;
 		number++;
}
if (number != 1)
{
	for (let i in alphabet) 
 		entropy += -(alphabet[i] * GetBaseLog(number, alphabet[i]));
}
console.log(entropy);
