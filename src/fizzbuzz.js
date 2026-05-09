export function fizzbuzz() {
  
  // Iniciamos un ciclo 'for' para contar los números.
  // 1. 'let i = 1' declara una variable llamada 'i' que empieza valiendo 1.
  // 2. 'i <= 100' le dice al ciclo que continúe mientras 'i' sea menor o igual a 100.
  // 3. 'i++' hace que 'i' aumente su valor en 1 en cada vuelta (1, luego 2, luego 3...).
  for (let i = 1; i <= 100; i++) {
    
    // Ahora: Evaluamos ambas condiciones juntas.
    // Usamos '&&' (que significa "Y") para obligar a que se cumplan las dos reglas.
    // Si, ¿El residuo de dividir 'i' entre 3 es igual a 0 Y el de 'i' entre 5 es igual a 0?
    if (i % 3 === 0 && i % 5 === 0) {
      
      // Si el número es múltiplo de 3 y de 5 (ej. 15, 30), imprimimos "FizzBuzz".
      console.log("FizzBuzz");
      
    } 
    // Si no se cumple la condición anterior, pero sí se cumple esta nueva condición...
    // Evaluamos si solo es múltiplo de 3.
    else if (i % 3 === 0) {

      // Si el residuo de dividir 'i' entre 3 es exactamente 0, imprimimos "Fizz".
      console.log("Fizz");
      
    } 
    // Si no se cumplen las dos condiciones anteriores, pero sí se cumple esta nueva condición...
    // Si no fue múltiplo de ambos, y tampoco fue múltiplo de 3, revisamos si lo es de 5.
    // Evaluamos si solo es múltiplo de 5.
    else if (i % 5 === 0) {

      // Si el residuo de dividir 'i' entre 5 es exactamente 0, imprimimos "Buzz".
      console.log("Buzz");
      
    } 
    // Si el número no cumplió ninguna de las condiciones anteriores (ejemplo: 1, 2, 4)...
    // Con el resto de los numeros
    else {
      
      // ...entonces simplemente imprimimos el número original en la pantalla.
      console.log(i);
      
    }
    
  } // Termina el ciclo 'for'. Todo volverá a empezar hasta llegar a 100.
}

// Llamamos (ejecutamos) la función para que el código que escribimos empiece a trabajar.
fizzbuzz();