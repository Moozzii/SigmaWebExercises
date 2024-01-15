import mongoose from 'mongoose';
import {Schema} from "mongoose";

const schema = new Schema({
    name: String,
    salary: Number,
    language: String,
    Address: String});

const employees = mongoose.model('Employee', schema);   

const employee = [{
    name: "moez",
    salary: 10000000,
    language: "Rust",
    Address: "Wapda House"
    },
    {
        name: "Ahmad",
        salary: 10000000,
        language: "JavaScript",
        Address: "Station"
    },
    {
        name: "Anas",
        salary: 2304012,
        language: "Python",
        Address: "Mardan Road"
    },
    {
        name: "Shayan",
        salary: 1000000,
        language: "Java",
        Address: "Rajar"
    }

]

async function main(){
    await mongoose.connect('mongodb://localhost:27017/company')
    const saveEmployee = await employees.create(employee);
    console.log("Data Saved");
    mongoose.connection.close();
    console.log("Done");
}
main();