const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Matt', 55, 'matthewdsena@gmail.com', 'Seaton High');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Matt', 55, 'matthewdsena@gmail.com', 'Seaton High');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Matt', 55, 'matthewdsena@gmail.com', 'Seaton High');

    expect(intern.getRole()).toEqual("Intern");
});