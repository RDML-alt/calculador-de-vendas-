
class CalculadoraDeDesconto {
    calcular(valor, clienteVIP = false) {
        if (valor < 0) {
            throw new Error("Valor não pode ser negativo");
        }
        let desconto = 0;
        if (valor >= 100 && valor <= 500) {
            desconto = 0.10;
        } else if (valor > 500) {
            desconto = 0.20;
        }
        if (clienteVIP) {
            desconto += 0.05;
        }
        const valorFinal = valor - (valor * desconto);
        return valorFinal;
    }
}
const valor = 600;        
const clienteVIP = true;  
const calculadora = new CalculadoraDeDesconto();
const resultado = calculadora.calcular(valor, clienteVIP);

console.log("Valor final com desconto:", resultado);