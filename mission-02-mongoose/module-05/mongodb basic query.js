
// db.test.find({age: 12}, {name: 1, email: 1, phone: 1})

// db.test.find({age: 12}).project({name: 1, email: 1, phone: 1})

// -> project does not work on findOne()
// db.test.findOne({age: 12}, {name: 1, email: 1})

// operators -> $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
// db.test.find({age: {$eq: 12}})

// -> implicit and
// -> find age (18-30) which gender are female 
// db.test.find({gender: {$eq: 'Female'}, age: {$gte: 18, $lte: 30}}).project({age: 1, gender: 1})



/*
    // -> match age event number and interest Cooking
    db.test.find({ 
            // age: {$in: [18, 20, 22, 24, 26, 28, 30]},    // return documents with this age. if match with any one, it returns that doc
            age: {$nin: [18, 20, 22, 24, 26, 28, 30]},  // return documents without this age 
            interests: {$in: ['Gaming', 'Cooking']}  // if match with any one, it returns that doc
        }).sort({age: 1})
*/

    
/*    
    // -> same field er jonno, comma diye 'and' korle -> implicit and bole -> {age: {$lt: 30, $gt: 18}}
    // -> operator($and) diye 'and' korle explicit and bole -> {$and: [{age: {$gt: 18}}, {age: {$lt: 30}}]}
    db.test.find({
        $and: [
            {"skills.name": "KOTLIN"},
            {age: {$eq: 7}},
        ]
    }).sort({})
*/


/*

    -> field er upor base kore operation -> $exists, $type
    -> array size -> {numbers: {$size: 3}}  // array size jar 3, sei son doc gula return korbe

*/


/*
    *** Array ***
    
    db.test.find

    // find data from array position -> ami cassi 2 number position e jader data te "Reading" ase, sei sob data
    -> db.test.find({"interests.2": "Reading"})
    
    // ami exact array match ala data cassi, order/position all same
    -> db.test.find({"interests": [ "German", "Catalan", "Thai" ]})
    
    // If positoin does not matter, amar array te target values thakely holo. Se khetre $all operator use korbo
    // $all is equvalent to $and
    -> db.test.find({$and: [{interests: 'Cooking'}, {interests: 'Writing'}, {interests: 'Reading'}]}); // using $all
    -> db.test.find({$and: [{interests: 'Cooking'}, {interests: 'Writing'}, {interests: 'Reading'}]}); // using $and
    
    // array er jekono properties wise fetching
    -> db.test.find({"skills.name": "PYTHON"}) // array er object r vitor kono name properties jodi "PYTHON hoy, to o documents return korbe" 
    
    // Array theke exact object match (even position) korle data fetch
    -> db.test.find({
        skills: {
            name: "PYTHON",
            level: "Expert",
            isLearning: true
        }
    })
    
    
    // Array theke object er partial matching er khetre, position does not matter
    // Array er oject e thakley hobe
    // For specific, amar query values er modde DB er array te present thakley oi document return korbe
    -> db.test.find({
        skills: {
            $elemMatch: {
                name: "JAVASCRIPT",
                level: "Expert"
            }
        }
    })
    
    More example ->
        { _id: 1, results: [ 82, 85, 88 ] }
        { _id: 2, results: [ 75, 88, 89 ] }
        db.scores.find({
            results: {
                $elemMatch: {$gt: 80, $lt: 85}
            }
        })
        output: { _id: 1, results: [ 82, 85, 88 ] }
    
*/


/*

    ** Documents update **
    
    db.test.find
    
    // $set -> simple replace document's field
    db.test.updateOne(
        {_id: ObjectId("6406ad63fc13ae5a40000065")},
        {$set: {age: 95}},
        {new: true}
    )
    
    // We can update embedded document using dot quatation 
    db.test.updateOne(
        {_id: ObjectId("6406ad63fc13ae5a40000065")},
        {$set: {"address.city": "Khulna"}},
        {new: true}
    )
    
    
    ** array **
    
    // $push, $addToSet, $each, $slice, $sort
    
    // $push or $addToSet both operator support $each operator
    -> db.test.updateOne(
        {_id: ObjectId("6406ad63fc13ae5a40000065")},
        {
            $push: {
                interests: {
                    $each: ["eating", 'sleeping']
                }
            }
        },
        {new: true},
    )
    
    For Example:
        db.students.insertOne(
           {
              "_id" : 5,
              "quizzes" : [
                 { "wk": 1, "score" : 10 },
                 { "wk": 2, "score" : 8 },
                 { "wk": 3, "score" : 5 },
                 { "wk": 4, "score" : 6 }
              ]
           }
        )
    
    // now insert some data and update it and same time sort according to top score and save always top 3 scored in quiz array
         db.students.updateOne(
            {_id: 5},
            {
                $push: {
                    quizzes: {
                        $each: [{ "wk": 5, "score" : 9 },{ "wk": 6, "score" : 2 },{ "wk": 7, "score" : 4 },],
                        $sort: {score: -1},
                        $slice: 3
                    }
                }
            }
         )
         
         output:
            {
              "_id" : 5,
              "quizzes" : [
                 { "wk" : 1, "score" : 10 },
                 { "wk" : 5, "score" : 9 },
                 { "wk" : 2, "score" : 8 }
              ]
            }
            
            
    //** Point to be noted that $push can support $each, $slice, $sort both opertors. But $addToSet does not support $slice and $sort operators
    
    // $addToSet -->
        db.test.updateOne(
            {_id: ObjectId("6406ad63fc13ae5a40000065")},
            {
                $addToSet: {
                    interests: {
                        $each: ['fishing', 'eating'],
                    }
                }
            }
        )


    // $push -->
        db.test.updateOne(
            {_id: ObjectId("6406ad63fc13ae5a40000065")},
            {
                $push: {
                    interests: {
                        $each: ['fishing', 'eating'],
                        $sort: -1,
                        $slice: 3
                    }
                }
            }
        )
    
    
    
    **** Delete/update ****
    
    $unset, $pull, $pop, $pullAll
    
    // $unset diye amra document theke field remove korte pari, se khetre 
    // $unset diye, field and amra empty "" use korte pari or 1/true use korte pari
    
    --> $unset
        db.test.updateOne(
            {_id: ObjectId("6406ad63fc13ae5a40000065")},
            {
                $unset: {birthday: true}
            }
        )
    
    
    // $pop array theke first or last element delete kore
    // $pop -> 1 diye last element delete kore and -1 dile first element delete kore
    
    --> $pop
        db.test.updateOne(
            {_id: ObjectId("6406ad63fc13ae5a40000065")},
            {
                $pop: {friends: 1}  // -1 dile array theke first er element delete korbe
            }
        )
    
    
    // $pull array theke specific element delete kore
    
    --> $pull
        db.test.updateOne(
            {_id: ObjectId("6406ad63fc13ae5a40000065")},
            {
                $pull: {friends: "Mir Hussain"}
            }
        )
        
        
    // $pullAll array theke specific element delete kore, but e khetre array of elements input ney
    
    --> $pullAll
        db.test.updateOne(
            {_id: ObjectId("6406ad63fc13ae5a40000065")},
            {
                $pullAll: {friends: ["Tanmoy Parvez", "Fahim Ahammed Firoz"]}
            }
        )
        
    
*/


/*

    **** Array Update -> $set -> $
    **** Array $(positional) operator ***
    
    // for updating array of object, we use positional operator
    // But first, we must filter data
    
    -> $
        db.test.updateOne(
            {_id: ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Art"},    // filtering that document
            {
                $set: {
                    "education.$.year": 2023                                         // update specific field, here only first array of object will be updated
                }
            }
        )

*/
 
 
 
 /*

    // Drop and create collection
    
    -> db.createCollection("students") 
    -> db.students.drop( { writeConcern: { w: 1 } } )
 
 */
    






















