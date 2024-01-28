const inputs = document.getElementById('frm1')
const output = document.getElementById('output');
const button = document.getElementById('submit');

button.addEventListener('click', () => {
    let sum = 0;
    let count = 0;
    let average;

    for (let i = 0; i < inputs.length ;i++) {

        if (inputs.elements[i].value !== '') {
            sum += Number(inputs.elements[i].value)
            count++
        }
 
        average = sum/count;
    }

    // console.log(sum)
    output.innerHTML = average;
})
