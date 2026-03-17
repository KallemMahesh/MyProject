const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing= require("../models/listing.js");
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("connect to db");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=> ({...obj, 
        owner:"69ad825e04f28fcfea4a4b8b"}));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");
};
initDB();
