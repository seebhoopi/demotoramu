export interface UserModel { 
     name: string;
     userModelChoice: UserModelChoice;

 }

export interface UserModelChoice { 
     name: string;
     resultList: userResult[];

 }

 export interface userResult {
      premium:string;
    amount:string;
    type:string;
 }

export class Serializable {

    fromJSON(json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }

}
// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));