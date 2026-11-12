const express = require('express');

const app = express();
const fs= require('fs')
// Built-in middleware for parsing form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Hello! This is my first Express application.');
});

// Start server
const PORT = 5000;

app.get('/about', function (req, res) {
    res.send('This is a basic Express application');
});

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
});

app.get('/GetStudents', (req, res) => {
    fs.readFile('./Students.json', 'utf8', (err, data) => {

        if (err) {
            return res.status(500).json({
                status: false,
                statusCode: 500,
                message: 'Error reading Students.json'
            });
        }

        res.status(200).json({
            status: true,
            statusCode: 200,
            requestedAt: new Date().toISOString(),
            requestUrl: req.originalUrl,
            requestMethod: req.method,
            studentData: JSON.parse(data)
        });
    });
});

app.get('/GetStudent/:id', (req, res) => {

    console.log("GetStudent called");

    fs.readFile(__dirname + "/Students.json", "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                status: false,
                statusCode: 500,
                message: "Error reading Students.json"
                
            });
        }

        const students = JSON.parse(data);
        const student = students["Student" + req.params.id];

        console.log(student);

        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({
                status: false,
                statusCode: 404,
                message: "Student Not Found",
                requestedAt: new Date().toISOString(),
                requestUrl: req.originalUrl,
                requestMethod: req.method
            });
        }
    });
});
// showing html form
app.get('/studentinfo', (req, res) => {
    res.sendFile('StudentInfo.html', { root: __dirname });
});

app.post('/submit-data', (req, res) => {

    const name = req.body.firstName + ' ' + req.body.lastName;
    const age = req.body.myAge 
    const Gender = ' Gender: ' + req.body.gender;
    const qual = 'Qualification: ' + req.body.Qual;

    console.log(req.body.Qual);

    res.send({
        status: true,
        message: 'Form Details',
        data: {
            name: name,
            age: age,
            gender: Gender,
            qualification: qual
        }
    });
});
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose');
const {
    insertOne,
    findAll,
    countDocuments,
    findFemalesOver30,
    deleteManyPersons,
    insertMany,
    updateManyPersons
} = require('./Week4lab');

//const MONGO_URI = 'mongodb://localhost:27017/Employee';  // if you are using the mongdb at your system
const MONGO_URI = 'mongodb+srv://premkumardas239_db_user:Mahadev12345@u3128255.v59ahqv.mongodb.net/lab19';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.post('/insertOne', async (req, res) => {

    try {

        const result = await insertOne(
            req.body.name,
            req.body.age,
            req.body.gender,
            req.body.salary
        );

        res.status(201).json({
            status: true,
            message: "Person inserted successfully",
            data: result
        });

    } catch (err) {

        res.status(500).json({
            status: false,
            message: err.message
        });

    }
});
app.post('/insertMany', async (req, res) => {

    try {

        const result = await insertMany(
            req.body.name,
            req.body.age,
            req.body.gender,
            req.body.salary,
             req.body.name2,
            req.body.age2,
            req.body.gender2,
            req.body.salary2
        );

        res.status(201).json({
            status: true,
            message: "Person inserted successfully",
            data: result
        });

    } catch (err) {

        res.status(500).json({
            status: false,
            message: err.message
        });

    }
});

app.get('/Showform', (req, res) => {

    res.sendFile('Personform.html', {
        root: __dirname
    });

});

    app.get('/manyperson', (req, res) => {

    res.sendFile('manyperson.html', {
        root: __dirname
    });
});
 app.get('/findFemalesOver30', async (req, res) => {
    try {
        console.log("calling females over 30")
        const result = await findFemalesOver30();
        res.json(result);
        console.log("result")
    } catch (err) {
        res.status(500).json(err);
    }
   
});
app.get('/countDocuments', async (req, res) => {
    try {
        console.log("calling count documents")
        const result = await countDocuments();
        res.json(result);
        console.log("result")
    } catch (err) {
        res.status(500).json(err);
    }
   
});
// Update multiple persons 
app.get('/updateManyPersons', async (req, res) => {
    try {
        console.log("Calling update many persons");

        const result = await updateManyPersons();

        res.json(result);

    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/persons', async (req, res) => {
    try {
        console.log("calling all find")
        const result = await findAll();
        res.json(result);
        console.log("result")
    } catch (err) {
        res.status(500).json(err);
    }
   
});
//5. DELETE MANY persons
app.get('/deleteManyPersons', async (req, res) => {
    try {
        console.log("Calling delete many persons");

        const result = await deleteManyPersons();

        res.json({
            success: true,
            message: "persons deleted successfully",
            deletedCount: result.deletedCount
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});