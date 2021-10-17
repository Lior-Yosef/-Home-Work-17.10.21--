
// 1.צרו מחלקה עם 3 שדות ופונקציה סטטית אחת,2 שדות טקסט ושדה מספר אחד, 
// הפונקציה היא פונקציית random מותאמת לפי הנתונים שהמחלקה מקבלת בבנאי. 
// לדוג': במידה והמספר הוא 1000 אז המספר שיחזור יהיה בין 0 ל 999 . 


// class numbers {
//     Num;
//     userName;
//     userLname;
//     constructor(num, firstName, lastName) {
//         this.Num = num;
//         this.userName = firstName;
//         this.userLname = lastName;
//     };

//     static randomNum(number) {
//         return Math.floor(Math.random() * number)
//     }
// }

// let num1 = new numbers(11, "lior", "yosef", 100);

// console.log(numbers.randomNum(10));

//////////////////////////////!


// 2.כתבו תוכנית שמקבלת מהמשתמש נתונים של שם, סיסמה, מייל ושם משתמש.
//  התוכנית יוצרת מופע של משתמש.
// לאחר מכן היא משווה בין שני אובייקטים, כדי לקבוע 
// האם הראשון מכיל ערכי מאפיינים שווי ערך לזה השני. 
// אחד מהאובייקטים ניצור ידנית בקוד (הארדקודד).



// let firstName = document.getElementById("first");
// let Username = document.getElementById("Username");
// let password = document.getElementById("password");
// let mail = document.getElementById("mail");
// let btn = document.getElementById("btn");



// class User {
//     firstName;
//     Username;
//     password;
//     mail;
//     constructor(firstName, Username, password, mail) {
//         this.firstName = firstName
//         this.Username = Username
//         this.password = password
//         this.mail = mail
//     }

// }

// let user1 = new User("lior", "lior12", 1234, "lior@gmail.com");

// btn.onclick = () => {
//     let user2 = new User(firstName.value, Username.value, password.value, mail.value);
//     console.log(user2);

//     for (const key in user2) {
//         if (user2[key] != user1[key]) {
//             console.log(`this key ${user2[key]} not equal to ${user1[key]}`);
//         }else{
//             console.log("all fine");

//         }
//     }

// }

// console.log(user1);


//////////////////////////////!


// צרו מחלקה של יישוב עם שדות של מס תושבים ושם. 
// בנו פונקציה שמחזירה את הפרטים בטקסט אחד. 


// לאחר מכן צרו מחלקה של מדינה, עיר וכפר, המחלקות יורשות מהמחלקה יישוב. A
// הוסיפו לכל מחלקה פונקציה שקוראת לפונקציה ממחלקת ההורה 
// ומחזירה את הטקסט עם סוג היישוב . 


// צרו פונקציה סטטית במחלקה יישוב שמקבלת מספר אובייקטים B
// ומחזירה את האובייקט עם מספר התושבים הגדול ביותר.





class Town {
    residentsNumber;
    name;
    constructor(residentsNumber, name) {
        this.residentsNumber = residentsNumber;
        this.name = name;
    }

    returnToString() {
        return this.residentsNumber + this.name
    }

    static returnObj(...obj) {
        return Math.max(...obj);

    }

};

let Town1 = new Town(150000, "haifa");
// console.log(Town1);
console.log(Town1.returnToString());



class Country extends Town {
    returnType() {
        return `${this.returnToString()} + ${this.constructor.name}`
    }

}


class Locality extends Town {
    returnType() {
        return `${this.returnToString()} + ${this.constructor.name}`
    }

}



class Village extends Town {
    returnType() {
        return `${this.returnToString()} + ${this.constructor.name}`
    }

}

let counter1 = new Country(8000000, "israel");
let Locality1 = new Locality(1300, "kiryat-yam");
let Village1 = new Village(154, "magan-michel");

console.log(counter1.returnType());
console.log(Locality1.returnType());
console.log(Village1.returnType());


///B//
console.log(Town.returnObj(counter1.residentsNumber, Locality1.residentsNumber, Village1.residentsNumber));
///B//


// צרו טופס שמקבל נתונים מהמשתמש ועל פי הטופס יוצרת את 
// האובייקט המתאים ומוסיפה אותו לטבלה מתחת לטופס.

let first = document.getElementById("first");
let residents = document.getElementById("residents");
let type = document.getElementById("type");
let btn = document.getElementById("btn");
let table = document.getElementById("table");


btn.onclick = () => {
    switch (type.value) {
        case "Town":
        let town2=new Town (first.value,residents.value,type.value);
        table.innerHTML+=`<tr><td>  Town: </td> <td>${town2.residentsNumber} </td> <td>${town2.name} </td> </tr>`
            break;

        case "Country":
        let Country2=new Town (first.value,residents.value,type.value);
        table.innerHTML+=`<tr><td>  Country: </td> <td>${Country2.residentsNumber} </td> <td>${Country2.name} </td> </tr>`

            break;

        case "Locality":
        let Locality2=new Town (first.value,residents.value,type.value);
        table.innerHTML+=`<tr><td>  Locality: </td> <td>${Locality2.residentsNumber} </td> <td>${Locality2.name} </td> </tr>`

            break;

        case "Village":
        let Village2=new Town (first.value,residents.value,type.value);
        table.innerHTML+=`<tr><td>  Village: </td> <td>${Village2.residentsNumber} </td> <td>${Village2.name} </td> </tr>`

            break;

        default:
            break;
    }
}
