// change header background when scroll
const header = (<HTMLElement>document.getElementById('header'));

const scrollHeader = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.backgroundColor = 'rgba(9, 22, 89, 1)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.068)';
    }
};

window.onscroll = scrollHeader;

// load input when radio is checked
const loadInput = () => {
    const checkedInputMoney: boolean = (<HTMLInputElement>document.querySelector('#selectElectricMoney')).checked;
    const checkedInputKilo: boolean = (<HTMLInputElement>document.querySelector('#selectElectricKilo')).checked;
    const inputMoney: any = (<HTMLElement>document.getElementById('InputElectricMoney'));
    const inputKilo: any = (<HTMLElement>document.getElementById('InputElectricKilo'));
    
    inputMoney.className = checkedInputMoney ? 'form-input' : 'form-input hide';
    inputKilo.className = checkedInputKilo ? 'form-input' : 'form-input hide'
};

(<HTMLElement>document.querySelector('#formInputNumberElectric')).addEventListener('click', loadInput);
window.onload = loadInput;

// load option when '3 pha' is checked 
const loadOption = () => {
    const checkedRadio: boolean = (<HTMLInputElement>document.querySelector('#threePhasePower')).checked;
    const option:any = (<HTMLElement>document.querySelector('#optionThreePhasePower'));
    if (checkedRadio == true) {
        return option.style.display = 'flex'
    } else {
        return option.style.display = 'none'
    }
};
(<HTMLElement>document.querySelector('#typeOfElectric')).addEventListener('click', loadOption);

// collapse when click 
const collapseDemand = () => {
    const element:any = (<HTMLElement>document.querySelector('#electricUsageDemand'));
    const icon:any = (<HTMLElement>document.querySelector('#iconAngleUpDemand'));
    const button:any =(<HTMLButtonElement>document.querySelector('#btnCollapseDemand'));

    button.innerText = element.className ? 'Rút gọn' : 'Xem thêm';
    icon.className = element.className ? 'fa-solid fa-angle-up collapse' : 'fa-solid fa-angle-up expand';
    element.className = element.className ? '' : 'hidden1'
};
const collapseHabit = () => {
    const element:any = (<HTMLElement>document.querySelector('#electricUsageHabit'));
    const icon:any = (<HTMLElement>document.querySelector('#iconAngleUpHabit'));
    const button:any =(<HTMLButtonElement>document.querySelector('#btnCollapseHabit'));

    button.innerText = element.className ? 'Rút gọn' : 'Xem thêm';
    icon.className = element.className ? 'fa-solid fa-angle-up collapse' : 'fa-solid fa-angle-up expand';
    element.className = element.className ? '' : 'hidden1'
};
(<HTMLElement>document.querySelector('#btnCollapseDemand')).addEventListener('click', collapseDemand);
(<HTMLElement>document.querySelector('#btnCollapseHabit')).addEventListener('click', collapseHabit);


