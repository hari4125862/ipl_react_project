var express=require('express');
var cors=require('cors')
var app=express();
var bodyParser=require('body-parser');
var mongoose =require('mongoose');
Match=require('./matches')
//connect to mongoose
var x=[];
var y=[];
var x1=[];
var y1=[];
app.use(cors());
mongoose.connect('mongodb://localhost/IPL2');
var db=mongoose.connection;

app.get('/',function(req,res){
    res.send('please use /api/matches or1 /api/deliveries');
    
});

app.get('/api/matches',function(req,res){
  db.collection("matches")
  .aggregate([
   
    {
      $group: {
        _id: {season: "$season" },
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ])
  .toArray()
  .then(
    result2 => {
      res.json({ result2 });
      console.log(result2);
    },
    err => res.status(301).send()
  );
});


app.get('/api/matches1',function(req,res){
  db.collection("matches")
  .aggregate([
    
    {
      $group: {
        _id: { winner: "$winner",season:"$season"},
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: 1 } }
  ])
  .toArray()
  .then(
    result2 => {
      res.json({ result2 });
      console.log(result2);
    },
    err => res.status(301).send()
  );
});


app.get('/api/deliveries',function(req,res){
  var query = { season: 2016 };
  year=[]
  team=[]
  db.collection("matches")
  .find({season:2016})
  .toArray(function(err, result) {
    if (err) 
      throw err;
  
    for(i=0;i<result.length;i++)
    {
      year[i]=result[i].id;
    }
    first=year[0];
  last=year[year.length-1];

  db.collection("deliveries")
  .aggregate([{"$match":{ "match_id" : { "$lt" : last} 
  , "$and" : [ { "match_id" : { "$gt" : first}}]}}
  ,{ "$group" : {_id:{batting_team:"$batting_team"}
  , count:{$sum:"$extra_runs"}}}])
  .toArray(function(err, result1) {
   if (err) throw err;
  console.log(result1);
  res.json(result1)
  });
  });
    });


    app.get('/api/deliveries1',function(req,res){
      var query = { season: 2015 };
      year=[]
      team=[]
      db.collection("matches")
      .find({season:2015})
      .toArray(function(err, result) {
        if (err) 
          throw err;
      
        for(i=0;i<result.length;i++)
        {
          year[i]=result[i].id;
        }
        first=year[0];
      last=year[year.length-1];
    
      db.collection("deliveries")
      .aggregate([
        {"$match":{ "match_id" : { "$lt" : last} 
        , "$and" : [ { "match_id" : { "$gt" : first}}]
        }
        }
        ,{ "$group" : {_id:{bowler:"$bowler"}
        , count:{$sum:"$total_runs"}
        }
        }, { $sort: { count: 1 } },
        {$limit: 5}
        ])
      .toArray(function(err, result1) {
       if (err) throw err;
      console.log(result1);
      res.json(result1)
      });
      });
        });


        app.get('/api/deliveries2',function(req,res){
      
          db.collection("deliveries")
          .aggregate([
           { "$group" : {_id:{batsman:"$batsman"}
            , count:{$sum:"$total_runs"}
            }
            }, { $sort: { count: -1 } },
            {$limit: 5}
            ])
          .toArray(function(err, result1) {
           if (err) throw err;
          console.log(result1);
          res.json(result1)
          });
          });
          
 
app.listen(5000);
console.log('running on port 3000...');
