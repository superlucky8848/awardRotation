function Person(first, last, age, gender, interests)
{
    this.name= {
        'first': first,
        'last': last 
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

function NonConsturctor(a, b)
{
    return a+b; 
}

let person1 = new Person('John', 'Smith', 32, 'male', ['music', 'skiiing']);
let person2 = Object.create(person1);