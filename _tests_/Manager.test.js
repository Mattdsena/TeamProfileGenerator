const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Matt', 55, 'matthewdsena@gmail.com', 5);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 