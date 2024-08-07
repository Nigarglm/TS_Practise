//1. Ədədlərdən ibarət array qəbul edən və ədədlərin ortalamasını return edən funksiya yazmaq.
function averageNumber(numbers) {
    if (numbers.length === 0) {
        console.log("empty array");
    }
    var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
    return sum / numbers.length;
}
var average = averageNumber([1, 2, 3, 4, 5]);
console.log(average);

//2. {firstName:"John", lastName:"Doe"} tipli obyekt qəbul edən və "John Doe" return edən funksiya yazmaq. (İnterface istifadə edilməlidir)  

function returnFullname(fullname) {
    return "".concat(fullname.firstName, " ").concat(fullname.lastName);
}
var fullname = returnFullname({ firstName: "John", lastName: "Doe" });
console.log(fullname);



//3.Tip Calculator

document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var form = document.getElementById('tip-form');
    var billInput = document.getElementById('bill');
    var tipSelect = document.getElementById('tip');
    var peopleInput = document.getElementById('people');
    var tipAmountElement = document.getElementById('tip-amount');
    var totalAmountElement = document.getElementById('total-amount');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var bill = parseFloat(billInput.value);
        var tipPercent = parseFloat(tipSelect.value);
        var people = parseInt(peopleInput.value);
        if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
            alert('Please enter valid values.');
            return;
        }
        var tipAmount = (bill * (tipPercent / 100)) / people;
        var totalAmount = (bill / people) + tipAmount;
        tipAmountElement.textContent = "$".concat(tipAmount.toFixed(2));
        totalAmountElement.textContent = "$".concat(totalAmount.toFixed(2));
    });
    (_a = document.getElementById('reset')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        billInput.value = '';
        tipSelect.value = '5';
        peopleInput.value = '1';
        tipAmountElement.textContent = '$0.00';
        totalAmountElement.textContent = '$0.00';
    });
});
