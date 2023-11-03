{

    // object destructure
    const user = {
        id: 123,
        name: {
            firstName: 'Sabbir',
            lastName: 'Ahmmed'
        },
        address: 'Khulna',
        contact: '0170000000'
    }
    const {contact: phone, name: {firstName: calledName}} = user;
    console.log(calledName);
    console.log(user['name']['lastName']);
    console.log(phone);
    
    

    // array destructure
    const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'monica', 'phoebe'];
    const [,, bestFriend, ...rest] = myFriends;
    console.log(bestFriend);
    




}