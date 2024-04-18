//create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//use path module to get the path of the file
const path = require('path');
const filePath = path.join(__dirname, 'comments.json');

//use fs module to read and write to the file
const fs = require('fs');

//middleware to parse json data
app.use(express.json());

//GET request to return all comments
app.get('/comments', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred while reading the file.');
        } else {
            res.send(JSON.parse(data));
        }
    });
});

//POST request to add a new comment
app.post('/comments', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred while reading the file.');
        } else {
            const comments = JSON.parse(data);
            const newComment = req.body;
            comments.push(newComment);
            fs.writeFile(filePath, JSON.stringify(comments), (err) => {
                if (err) {
                    res.status(500).send('An error occurred while writing the file.');
                } else {
                    res.send('Comment added successfully.');
                }
            });
        }
    });
});

//PUT request to update a comment
app.put('/comments/:id', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('An error occurred while reading the file.');
        } else {
            const comments = JSON.parse(data);
            const id = req.params.id;
            const updatedComment = req.body;
            const index = comments.findIndex((comment) => comment.id === id);
            if (index === -1) {
                res.status(404).send('Comment not found.');
            } else {
                comments[index] = updatedComment;
                fs.writeFile(filePath, JSON.stringify(comments), (err) => {
                    if (err) {
                        res.status(500).send('An error occurred while writing the file.');
                    } else {
                        res
                    }
                });
            }
        }
    });
});