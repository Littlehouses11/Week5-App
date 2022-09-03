class Lift {
    constructor(name, total){
        this.name = name;
        this.total = total;
    }

    describe(){
        return `${this.name} : ${this.total}.`;
    }
}

class Lifter {
    constructor(name){
        this.name = name;
        this.liftArray = [];
    }

    addLift(lift){
        if (lift instanceof Lift){
            this.liftArray.push(lift);
        } else {
            throw new Error(`Not a lift. Try again: ${lift}`);
        }
    }
    describe() {
        return `${this.name} has ${this.liftArray.length} recorded lifts.`;
    }
}

class Menu{
    constructor() {
        this.liftersArray = [];
        this.selectedLifter = null;
    }

    start() {
        let selection = this.showMenuOptions();
        while (selection !=0 ) {
            switch(selection){
                case '1':
                    this.addLifter();
                break;
                case '2':
                    this.addLift();
                break;
                case '3':
                    this.displayLifters();
                break;
                case '4':
                    this.deleteLifter();
                    break;
                    default:
                        selection = 0;
            }
            selection = this.showMenuOptions();
        }
        alert ('GG');
    }

    showMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New Lifter
        2) Add Lift
        3) Display Lifter
        4) Delete Lifter
        `);
    }

    showLifterMenuOptions(lifterInfo){
        return prompt(`
        0) back
        1) create new lift
        2) delete lift
        -------------------------------
        ${lifterInfo}
        `);
    }

    addLifter(){
        let name = prompt('Enter lifter name');
        this.liftersArray.push(new Lifter(name));
    }
    displayLifters(){
       let lifterString = '';
       for (let i=0; i < this.liftersArray.length; i++) {
        lifterString += i + ') ' + this.liftersArray[i].name + '\n';
       }
       alert(lifterString);
    }
    viewLifter(){
        let index = prompt('Enter index of lifter:');
        if (i > -1 && index < this.liftersArray.length){
            this.selectedLifter = this.liftersArray[index];
             description = 'Lifter name:' + this.selectedLifter.name + '\n';

            for (i=0; i < this.selectedLifter.liftArray.length; i++)
            description += i + ') ' + this.selectedLifter.liftArray[i].name
             + ' - ' + this.selectedLifter.liftArray[i].total + '\n';
        }

        let selection = this.showLifterMenuOptions(description);{
            switch (selection){
                case '1':
                    this.createLift();
                case '2':
                    this.deleteLift();
            }
        }
    }
    addLift(){
        let name = prompt ('Enter name of lift:');
        let total = prompt ('Enter total for lift:');
        this.selectedLifter.liftArray.push(new Lift(name, total));
    }

    deleteLift(){
        let index = prompt('Enter index of lift to delete');
        if (index > -1 && index < this.selectedLifter.liftArray.length){
            this.selectedLifter.liftArray.splice(index, 1);
        }
    }
    deleteLifter(){
        let index = prompt('Enter index of lifter to delete');
        if (index > -1 && index < this.liftersArray.length){
            this.liftersArray.splice(index, 1);
        }
    }
}

let menu = new Menu()
menu.start();
