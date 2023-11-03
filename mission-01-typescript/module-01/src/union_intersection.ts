{
    // union(|) and intersection(&) type

    // union type -> | -> or
    type FrontendDeveloper = 'weakDeveloper' | 'juniorDeveloper'; 
    type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper';
    type Developer = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper: FullstackDeveloper = 'frontendDeveloper'


    // More union
    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+'|'B+'|'AB+';
    }

    const newUser: User = {
        name: 'Sabbir',
        gender: 'male',
        bloodGroup: 'B+'
    }



    // intersection type -> & -> and
    // jeta common seta to thakbey + jegula common na, segula o thakbe
    type JuniorFrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    type JuniorBackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type JuniorFullstackDeveloper =  JuniorFrontendDeveloper & JuniorBackendDeveloper;

    const fullstackDeveloper: JuniorFullstackDeveloper = {
        skills: ['reactjs', 'nodejs', 'mongodb'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }

}