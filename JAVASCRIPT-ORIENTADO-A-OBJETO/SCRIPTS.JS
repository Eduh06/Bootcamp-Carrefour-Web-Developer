

//criação classes conta bancaria//

class ContaBancaria{
		constructor (agencia, numero, tipo){

			this.agencia = agencia;
			this.numero = numero;
			this.tipo = tipo;
			this.saldo = 0;

		}

		//construção do get e set do saldo//
		get saldo(){
			return this._saldo;
		}

		set saldo(valor){
			this._saldo = valor;
		}

		sacar(valor){
			if (valor > this._saldo) {
				return "Operação Invalida"
			}
			this._saldo = this._saldo - valor;

			return this._saldo;
		}
		depositar(valor) {
			this._saldo = this._saldo + valor;
		}

}

class ContaCorrente extends ContaBancaria{
		constructor (agencia, numero){
			super(agencia, numero);
			this.tipo = 'Corrente';
			this._CartaoCredito;
		}
		get cartaoCredito(){
			return this._CartaoCredito;		
		}
	 	
	 	set cartaoCredito(valor){
	 		this._CartaoCredito = valor;
	 	}
}

class ContaPoupanca extends ContaBancaria{
		constructor (agencia, numero){
			super(agencia, numero);
			this.tipo = 'poupança';
		}
	 	
}


class ContaUniversitaria extends ContaBancaria{
		constructor (agencia, numero){
			super(agencia, numero);
			this.tipo = 'universitária';
		}
		sacar(valor){
			if(valor> 500){
				return "Operação Invalida!"
			}

		this._saldo = this.saldo - valor;
			
		} 	
}