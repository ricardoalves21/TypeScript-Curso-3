export function inspect() {
  return function (
    //Aqui começa uma função anônima
    tartget: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    //Aqui começa o corpo da função anônima
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      //Aqui começa outra função anônima que recebe qualquer tipo de parâmetro
      console.log(`--- Método ${propertyKey}`);
      console.log(`------ parâmetros ${JSON.stringify(args)}`);
      const retorno = metodoOriginal.apply(this, args);
      console.log(`------ retorno: ${JSON.stringify(retorno)}`);
      return retorno;
    };
    return descriptor;
  };
}
