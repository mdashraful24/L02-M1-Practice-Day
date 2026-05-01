//! Spread and Rest Operator

// * Spread operator

const friends = ["hablu", "kablu"];

const schoolFriends = ["montu", "jhontu", "bantu"];

const collageFriends = ["poltu", "boltu", "maltu", "jantu"];

friends.push(schoolFriends);
friends.push(...schoolFriends);


const user = { name: "monu", phoneNo: "01788888888" };

const otherInfo = { hobby: "outing", favoriteColor: "black" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);


// * Rest operator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Send Invitation to ${friend}`));
}

sendInvite("bulbul", "chulbul", "ulul");
