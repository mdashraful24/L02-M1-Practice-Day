// ! Destructuring in typescript


// * object destructuring
// * array destructuring


const user = {
    id: 123,
    name: {
        firstName: "Ashraful",
        middleName: "Islam",
        lastName: "Ratul"
    },
    gender: "male",
    favoriteColor: "black"
};

// const myFavoriteColor = user.favoriteColor;
// const myMiddleName = user.name.middleName;


const {
    favoriteColor: myFavoriteColor,
    name: { middleName: myMiddleName }
} = user; // * name alias

console.log(myFavoriteColor, myMiddleName);


const friends = ["hablu", "kablu"];

// const myBestFriend = friends[1];

const [, , myBestFriends ] = friends; // * skipping

console.log(myBestFriends);
