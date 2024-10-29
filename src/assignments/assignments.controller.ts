import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

    // Fibonacci
    @Get('fibonacci/:n')
    getFibonacci(@Param('n') n: string): { sequence: number[] } {
        const num = parseInt(n, 10);
        const sequence = this.calculateFibonacci(num);
        return { sequence };
    }
    
    private calculateFibonacci(n: number): number[] {
        if (n <= 0) return [];
        if (n === 1) return [0];
        if (n === 2) return [0, 1];
    
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
    
    // Prime Number
    @Get('prime/:number')
    isPrime(@Param('number') number: string): { isPrime: boolean } {
        const num = parseInt(number, 10);
        return { isPrime: this.checkPrime(num) };
    }
    
    private checkPrime(n: number): boolean {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false; 
        }
        return true;
    }

    // Factorial
    @Get('factorial/:number')
    calculateFactorial(@Param('number') number: string): { factorial: number } {
        const num = parseInt(number, 10);
        return { factorial: this.factorial(num) };
    }

    private factorial(n: number): number {
        if (n < 0) return 0; 
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
