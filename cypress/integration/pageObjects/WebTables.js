
let age, email, salary, department;

const rowSelector = ':nth-child';
const firstNameSelector = ':nth-child(1)';
const lastNameSelector = ':nth-child(2)';
const ageSelector = ':nth-child(3)';
const emailSelector = ':nth-child(4)';
const salarySelector = ':nth-child(5)';
const departmentSelector = ':nth-child(6)';
const tableRowSelector = '.rt-tr';
const firstNameId = '#firstName';
const lastNameId = '#lastName';
const userEmailId = '#userEmail';
const ageId = '#age';
const salaryId = '#salary';
const departmentId = '#department';

export class WebTables {
    clickAddButton() {
        cy.get('#addNewRecordButton').click();
    }

    fillOutTheRegistrationForm(dataTable) {
        dataTable.hashes().forEach(element => {
            cy.get(`${firstNameId}`).clear().type(element.FirstName);
            cy.get(`${lastNameId}`).clear().type(element.LastName);
            cy.get(`${userEmailId}`).clear().type(element.Email);
            cy.get(`${ageId}`).clear().type(element.Age);
            cy.get(`${salaryId}`).clear().type(element.Salary);
            cy.get(`${departmentId}`).clear().type(element.Department);
        });
    }

    verifyTheForm(dataTable) {
        dataTable.hashes().forEach(element => {
            this.verifyRowData(4, element);
        });
    }

    verifyRowData(rowIndex, element) {
        cy.get(`${rowSelector}(${rowIndex}) > ${tableRowSelector} > ${firstNameSelector}`).should('have.text', element.FirstName);
        cy.get(`${rowSelector}(${rowIndex}) > ${tableRowSelector} > ${lastNameSelector}`).should('have.text', element.LastName);
        cy.get(`${rowSelector}(${rowIndex}) > ${tableRowSelector} > ${ageSelector}`).should('have.text', element.Age);
        cy.get(`${rowSelector}(${rowIndex}) > ${tableRowSelector} > ${emailSelector}`).should('have.text', element.Email);
        cy.get(`${rowSelector}(${rowIndex}) > ${tableRowSelector} > ${salarySelector}`).should('have.text', element.Salary);
        cy.get(`${rowSelector}(${rowIndex}) > ${tableRowSelector} > ${departmentSelector}`).should('have.text', element.Department);
    }

    saveDetails(rowIndex) {
        if (rowIndex === 'first') {
            this.saveRowDetails(1);
        } else if (rowIndex === 'second') {
            this.saveRowDetails(2);
        } else if (rowIndex === 'third') {
            this.saveRowDetails(3);
        } else {
            throw new Error('Invalid option. Please use "first", "second", or "third".');
        }
    }

    saveRowDetails(index) {
        cy.get(`${rowSelector}(${index}) > ${tableRowSelector} > ${ageSelector}`).then(($value) => {
            age = $value.text();
        });
        cy.get(`${rowSelector}(${index}) > ${tableRowSelector} > ${emailSelector}`).then(($value) => {
            email = $value.text();
        });
        cy.get(`${rowSelector}(${index}) > ${tableRowSelector} > ${salarySelector}`).then(($value) => {
            salary = $value.text();
        });
        cy.get(`${rowSelector}(${index}) > ${tableRowSelector} > ${departmentSelector}`).then(($value) => {
            department = $value.text();
        });
    }

    clickOnEditButton(rowIndex) {
        if (rowIndex === 'first' || rowIndex === 'second' || rowIndex === 'third') {
            cy.get(`#edit-record-${rowIndex === 'first' ? 1 : rowIndex === 'second' ? 2 : 3}`).click();
        } else {
            throw new Error('Invalid option. Please use "first", "second", or "third".');
        }
    }

    editFirstNameAndLastName(dataTable) {
        dataTable.hashes().forEach(element => {
            cy.get(`${firstNameId}`).clear().type(element.FirstName);
            cy.get(`${lastNameId}`).clear().type(element.LastName);
        });
    }

    checkFirstNameAndLastName(dataTable) {
        dataTable.hashes().forEach(element => {
            cy.get(`${rowSelector}(2) > ${tableRowSelector} > ${firstNameSelector}`).should('have.text', element.FirstName);
            cy.get(`${rowSelector}(2) > ${tableRowSelector} > ${lastNameSelector}`).should('have.text', element.LastName);
        });
    }

    checkStoredDetails(rowIndex) {
        if (rowIndex === 'first') {
            this.checkRowDetails(1);
        } else if (rowIndex === 'second') {
            this.checkRowDetails(2);
        } else if (rowIndex === 'third') {
            this.checkRowDetails(3);
        } else {
            throw new Error('Invalid option. Please use "first", "second", or "third".');
        }
    }

    checkRowDetails(index) {
        cy.get(`${rowSelector}(${index}) > ${tableRowSelector} > ${ageSelector}`).then(($value) => {
            expect(age).to.eq($value.text());
        });
        cy.get(`${rowSelector}(${index}) > ${tableRowSelector} > ${emailSelector}`).then(($value) => {
            expect(email).to.eq($value.text());
        });
        cy.get(`${rowSelector}(${index}) > ${tableRowSelector} > ${salarySelector}`).then(($value) => {
            expect(salary).to.eq($value.text());
        });
        cy.get(`${rowSelector}(${index}) > ${tableRowSelector} > ${departmentSelector}`).then(($value) => {
            expect(department).to.eq($value.text());
        });

    }
}

export const webTables = new WebTables();
