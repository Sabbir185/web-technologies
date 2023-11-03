{
    // spreed operator
    // rest operator
    // destructing


    // spreed operator
    const team1: string[] = ['Kiron', 'Mehedi', 'Liton'];
    const team2: string[] = ['Abrar', 'Tonmoy', 'Muzahid'];
    team2.push(...team1);


    const alphaTeam1 = {
        mobile: 'Abrar',
        UI: 'Liton',
    }
    const leadTeam = {
        backend1: 'Sabbir',
        backend2: 'Tuhin',
    }
    const newTeam = {...leadTeam, ...alphaTeam1};




    // rest operator
    const hiFriends = (...friends: string[]): void => {
        friends.forEach((friend: string): void => {
            console.log(`Hi, ${friend}`);
            
        });
    }
    hiFriends('A', 'B', 'C');



}