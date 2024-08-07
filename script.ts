//1. Ədədlərdən ibarət array qəbul edən və ədədlərin ortalamasını return edən funksiya yazmaq.

function averageNumber(numbers: number[]): number {
    if (numbers.length === 0) {
        console.log("empty array");
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

const average = averageNumber([1, 2, 3, 4, 5]);
console.log(average); 





//2. {firstName:"John", lastName:"Doe"} tipli obyekt qəbul edən və "John Doe" return edən funksiya yazmaq. (İnterface istifadə edilməlidir)  

interface Person {
    firstName: string;
    lastName: string;
}

function returnFullname(fullname: Person): string {
    return `${fullname.firstName} ${fullname.lastName}`;
}

const fullname = returnFullname({ firstName: "John", lastName: "Doe" });
console.log(fullname); 





//3.Tip Calculator

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tip-form') as HTMLFormElement;
    const billInput = document.getElementById('bill') as HTMLInputElement;
    const tipSelect = document.getElementById('tip') as HTMLSelectElement;
    const peopleInput = document.getElementById('people') as HTMLInputElement;
    const tipAmountElement = document.getElementById('tip-amount') as HTMLParagraphElement;
    const totalAmountElement = document.getElementById('total-amount') as HTMLParagraphElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const bill = parseFloat(billInput.value);
        const tipPercent = parseFloat(tipSelect.value);
        const people = parseInt(peopleInput.value);

        if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
            alert('Please enter valid values.');
            return;
        }

        const tipAmount = (bill * (tipPercent / 100)) / people;
        const totalAmount = (bill / people) + tipAmount;

        tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
    });

    document.getElementById('reset')?.addEventListener('click', () => {
        billInput.value = '';
        tipSelect.value = '5';
        peopleInput.value = '1';
        tipAmountElement.textContent = '$0.00';
        totalAmountElement.textContent = '$0.00';
    });
});