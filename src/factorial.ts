//Created on Sat Sep 13 14: 06: 30 2018
//@author: leejia

module FactorialModule {
	export class FactorialClass {
		fact: number = 1;
		factorial(n: number) {
			while (n > 0) {
				this.fact = this.fact * n;
				n = n - 1;
			}
			return this.fact;
		}
	}
}