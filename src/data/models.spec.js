import mongoose from 'mongoose'
import * as db from './models'
const CONFIG = require('../../config.json')[process.env.NODE_ENV || 'development'];

describe('Test Models db', () => {
    before(done => {
        //connect to mogodb
        const url = CONFIG.connectionString;
        mongoose.Promise = require('bluebird');
        mongoose.connect(url, {
            useMongoClient: true
        }, function(err){
            done()
        });
    });

    
    it('format investIn investors', (done) =>{
        db.investorsCollection.find({investInString:{$exists:true}}).exec(function(err, result) {
            let promises =[]
            result.forEach(function (el) {
                el.investIn = el.investInString ? el.investInString.split(',').map(function(item) {
                    return item.trim();
                  }) : el.investIn;  
                delete el.investInString;
                promises.push(db.investorsCollection.update({_id: el._id}, {$set:{investIn: el.investIn}, $unset:{investInString:1}}));
            });

            Promise.all(promises.map(p => p.catch(e => e)))
            .then(results => {
                console.log(results)
                done()
            })
            .catch(e => {
                done()
                console.log(e)}
            );
            
        });
    })

    // it('format tags companies', (done) =>{
    //     db.companiesCollection.find().exec(function(err, result) {
    //         let promises =[]
    //         result.forEach(function (el) {
    //             el.tags = el.tagsString ? el.tagsString.split(',').map(function(item) {
    //                 return item.trim();
    //               }) : el.tags;  
    //             delete el.tagsString;
    //             promises.push(db.companiesCollection.update({_id: el._id}, {$set:{tags: el.tags}, $unset:{tagsString:1}}))
    //         });
    //         Promise.all(promises.map(p => p.catch(e => e)))
    //             .then(results => {
    //                 console.log(results)
    //                 done()
    //             })
    //             .catch(e => console.log(e));
        
    //     });
    // })

    // it('format website companies', (done) =>{
    //     db.companiesCollection.find({website:{'$regex' : '^((?!http).)*$', '$options' : 'i'}}).exec(function(err, result) {
    //         let promises =[]
    //          console.log(result.length)

    //         result.forEach(function (el) {
    //             if(el.website && el.website.length > 0){
    //                 promises.push(db.companiesCollection.update({_id: el._id}, 
    //                     {$set:{website: 'http://'+el.website}}))
    //                 }
    //         });
    //         Promise.all(promises.map(p => p.catch(e => e)))
    //             .then(results => {
    //                 console.log(results)
    //                 done()
    //             })
    //             .catch(e => console.log(e));
        
    //     });
    // })

    // it('INVESTOR LIST', (done) =>{
    //     db.investorsCollection.aggregate([
    //         {  
    //             $lookup:{  
    //                 from:"companies",
    //                 localField:"investIn",
    //                 foreignField:"ltdName",
    //                 as:"details"
    //             }
    //         },
    //         {  
    //             $group:{  
    //                 _id:"$_id",
    //                 name:{$first:"$name"},
    //                 interest:{$first:"$interest"},
    //                 investIn:{$first:"$details"},
    //                 summary:{$first:"$summary"},
    //                 isInvestor:{$first:"$isInvestor"},
    //                 isAdvisor:{$first:"$isAdvisor"},
    //                 isMentor:{$first:"$isMentor"}
    //             }
    //         },
    //     ]).exec(function(err, result) {
    //         result.forEach(function(value, index){
    //             console.log('\x1b[34m'+(index+1) +": ", value.name + '\x1b[0m');
    //             if( value.interest){
    //                 console.log('\t\x1b[31mInterest\x1b[0m')                    
    //                 value.interest.forEach(function(value, index){
    //                     console.log("\t"+(index+1) +": ",value);                    
    //                 })
    //             }
    //             console.log('\t\x1b[31mComapnies\x1b[0m')
    //             value.investIn.forEach(function(value, index){
    //                 console.log("\t"+(index+1) +": ",value.name);    
    //                 value.tags.forEach(function(value, index){
    //                     console.log("\t  ",value.trim());
    //                 })
    //             })
    //             console.log('\r')
    //         })
    //         done()
    //     })
    // })




    // it('COMPANIES LIST', (done) =>{
    //     db.companiesCollection.find().exec(function(err, result) {
    //         result.forEach(function(value, index){
    //             console.log("\x1b[34m"+(index+1) +": ",value.name + '\x1b[0m');    
    //             value.tags.forEach(function(value, index){
    //                 console.log("   ",value.trim());
    //             })
    //             console.log('\r')
    //         })
    //         done()
    //     })
    // })

    
})