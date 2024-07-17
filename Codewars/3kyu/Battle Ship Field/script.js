function validateBattlefield(cuadro) {
    var Fuego = (fila, columna) => (fila < 0 || columna < 0 || fila > 9 || columna > 9) ? 0 : cuadro[fila][columna];
    for (var barcos = [10,0,0,0,0], fila = 0; fila < 10; fila++) {
      for (var columna = 0; columna < 10; columna++) {
        if (Fuego(fila,columna) ) {
          if (Fuego(fila-1, columna-1) || Fuego(fila-1, columna+1)){
              return false; // Está tocando la esquina
          }
          if (Fuego(fila-1, columna  ) && Fuego(fila  , columna-1)){
              return false; // Está tocando el lado
          }
          if ((cuadro[fila][columna] += Fuego(fila-1, columna) + Fuego(fila, columna-1) ) > 4) {
              return false; // El barco es muy largo
          }
          barcos[cuadro[fila][columna]]++; barcos[cuadro[fila][columna] - 1]--;
    } } }
    return [0,4,3,2,1].every((s,i) => s == barcos[i]);
  }