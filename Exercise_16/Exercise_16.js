import {Schema} from "mongoose";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(cors());
const schema = new Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
    Address: String});
    

const employees = mongoose.model('Employee', schema);   

const employee = [{
    name: "moez",
    salary: 10000000,
    language: "Rust",
    city: "Peshawar",
    isManager: true,
    Address: "Wapda House"
    },
    {
        name: "Ahmad",
        salary: 10000000,
        language: "JavaScript",
        city: "Peshawar",
        isManager: false,
        Address: "Station"
    },
    {
        name: "Anas",
        salary: 2304012,
        language: "Python",
        city: "Peshawar",
        isManager: false,
        Address: "Mardan Road"
    },
    {
        name: "Shayan",
        salary: 1000000,
        language: "Java",
        city: "Peshawar",
        isManager: false,
        Address: "Rajar"
    },
    {
        name: "Zainab",
        salary: 9500000,
        language: "Swift",
        city: "Islamabad",
        isManager: true,
        Address: "F-10 Markaz"
    },
    {
        name: "Farhan",
        salary: 11000000,
        language: "Kotlin",
        city: "Lahore",
        isManager: false,
        Address: "Model Town"
    },
    {
        name: "Nida",
        salary: 3000000,
        language: "PHP",
        city: "Karachi",
        isManager: false,
        Address: "Gulshan-e-Iqbal"
    },
    {
        name: "Tariq",
        salary: 1300000,
        language: "C",
        city: "Peshawar",
        isManager: false,
        Address: "University Road"
    },
    {
        name: "Aisha",
        salary: 7500000,
        language: "TypeScript",
        city: "Islamabad",
        isManager: true,
        Address: "Blue Area"
    },
    {
        name: "Omar",
        salary: 9000000,
        language: "Scala",
        city: "Lahore",
        isManager: false,
        Address: "Garden Town"
    }

]
async function main(){
    await mongoose.connect("mongodb://localhost:27017/company");
    app.post('/generatedata', async (req, res) => {
        try {
            await employees.insertMany(employee);
            res.json({ message: "Data inserted successfully" });
        } catch (error) {
            console.error("Error inserting data:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    
    const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}
main();