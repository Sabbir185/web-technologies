"use strict";
{
    // spreed operator
    // rest operator
    // destructing
    // spreed operator
    const team1 = ['Kiron', 'Mehedi', 'Liton'];
    const team2 = ['Abrar', 'Tonmoy', 'Muzahid'];
    team2.push(...team1);
    const alphaTeam1 = {
        mobile: 'Abrar',
        UI: 'Liton',
    };
    const leadTeam = {
        backend1: 'Sabbir',
        backend2: 'Tuhin',
    };
    const newTeam = Object.assign(Object.assign({}, leadTeam), alphaTeam1);
    // rest operator
    const hiFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi, ${friend}`);
        });
    };
    hiFriends('A', 'B', 'C');
}
