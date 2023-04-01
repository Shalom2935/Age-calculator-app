// Birth's information initialisation


// current day info

function dateDiff(date1, date2) {
    let diff = {};
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    let days = date2.getDate() - date1.getDate();
    console.log(days)
    if (days < 0) {
        months--;
        days += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
        console.log(days)
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    diff.years = years;
    diff.months = months;
    diff.days = days;
    console.log(diff)

    return diff;
}
function error(field){
    document.querySelector(field).classList.add('error');
    document.querySelector(field + ' > input').classList.add('red-border');
    document.querySelector(field + ' > p').classList.remove('hidden');
}

function errorEmpty(field) {
    console.log(2 == 1+1)
    error(field);
    document.querySelector(field + ' > p').textContent = 'This field is required';
}
function valid(field) {
    console.log(field)
    document.querySelector(field).classList.remove('error');
    document.querySelector(field + ' > input').classList.remove('red-border');
    document.querySelector(field + ' > p').classList.add('hidden');
}

let invalidMessages = ['Must be a valid Day', 'Must be a valid Month', 'Must be in the past'];

function errorInvalid(field,index){
    error(field);
    document.querySelector(field + ' > p').textContent = invalidMessages[index];
}

 function main(){
    document.querySelector('.icon-arrow').addEventListener('click', () =>{

        const Years = document.querySelector('#year').value;
        const Months = document.querySelector('#month').value;
        const Days = document.querySelector('#day').value;
        let today = new Date();
        let myDate = new Date(Years,Months-1,Days);
        let i = 0;
    
        valid('.day');
        valid('.month');
        valid('.year');
        
     
        if(Years === "" || Months === "" || Days === ""){
            
            if (Years === "") {
                errorEmpty('.year'); i=1;
            }
            if (Months === "") {
                errorEmpty('.month'); i=1;
            }
            if (Days === "") {
                errorEmpty('.day');i=1;
            }
        }  
        else{
            if (parseInt(Years) > today.getFullYear()) {
                errorInvalid('.year', 2);i=1;
            }
            if (Months <= 0 || Months > 12) {
                errorInvalid('.month', 1);i=1;
            }
            if (Months == 2 && Years % 4 != 0 && Days > 28) {
                console.log(Days > 28)
                errorInvalid('.day',0);
                errorInvalid('.month',1);i=1;
            } 
            if (Months == 2 && Days > 29) {
                errorInvalid('.day',0);
                errorInvalid('.month',1);i=1;
            }
            if ((Days > 30 && Months % 2 == 0 && Months < 8) || (Days > 30 && Months % 2 != 0 && Months >= 8)) {
                errorInvalid('.day',0);
                errorInvalid('.month',1);i=1;
            } 
            if (Days < 1 || Days > 31) {
                console.log(Days < 1 || Days > 31)
                console.log( Days < 1)
                console.log(Days)
                errorInvalid('.day',0);i=1;
            } 
        }  
    
      
        if(i==0) {
            console.log(today)
            console.log(myDate)
            let myAge = dateDiff(myDate,today);
            console.log(myAge)
            document.querySelectorAll('.second-hyphen').forEach((e) => {
                e.classList.add('hidden');
            });
            console.log(myAge.years == 1)
            if(myAge.years == 1 || myAge.months == 1 || myAge.days == 1){
                
                if(myAge.years == 1){
                    document.querySelector('.output-value:nth-child(1) > span.singular').classList.remove('hidden');
                    document.querySelector('.output-value:nth-child(1) > span.plural').classList.add('hidden');
                }
                if(myAge.months == 1){
                    document.querySelector('.output-value:nth-child(2) > span.singular').classList.remove('hidden');
                    document.querySelector('.output-value:nth-child(2) > span.plural').classList.add('hidden');
                }
                if(myAge.days == 1){
                    document.querySelector('.output-value:nth-child(3) > span.singular').classList.remove('hidden');
                    document.querySelector('.output-value:nth-child(3) > span.plural').classList.add('hidden');
                }
            }
            document.querySelector('.output-value:nth-child(1) .number').textContent = myAge.years;
            document.querySelector('.output-value:nth-child(2) .number').textContent = myAge.months;
            document.querySelector('.output-value:nth-child(3) .number').textContent = myAge.days;
        } 
    });
 }

main();

