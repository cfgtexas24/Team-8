const express = require('express');
const {Pool} = require('pg');
const app = express();
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cfgdallas',
    password: '',
    port: 5432,
  });

app.get('/', (req, res) => {
    res.send('Successful response.');

});

//GET API to fetch all companies 
app.get('/companies', async (req, res) => {
    try {
        console.log("I am here");
        const
        result = await pool.query('SELECT * FROM Companies');
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error.message);
        console.log("error line 26");
    
        res.status(500).send("dwada");
    }
});

// GET API to fetch all jobs
app.get('/jobs', async (req, res) => {
    console.log("API Received");
    try {
        
      const result = await pool.query('SELECT * FROM jobs');
      if (result.rows.length === 0) {
        return res.status(404).send('No jobs found.');
      }
      res.json(result.rows);
    } catch (error) {
      console.error('Error retrieving jobs:', error);
      res.status(500).send('Failed to retrieve jobs.');
    }
  });
  
//POST API to add a new job posting
app.post('/jobs', async (req, res) => {
    const{
        company_id,
        job_title,
        job_description,
        job_requirements,
        job_location,
        job_salary,
        job_type,
        job_post_date,
        job_deadline,
        job_status,
    } = req.body;

    try {
        const result = await pool.query(
          `INSERT INTO jobs (
            company_id, job_title, job_description, job_requirements, 
            job_location, job_salary, job_type, job_post_date, 
            job_deadline, job_status
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
          [
            company_id,
            job_title,
            job_description,
            job_requirements,
            job_location,
            job_salary,
            job_type,
            job_post_date,
            job_deadline,
            job_status,
          ]
        );
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.log("Error has occured");
        res.status(500).send("An error has occured, job has not been added");
    }});


//Allows for job post modification 
app.put('/jobs/:id', async (req, res) => {
    const id = req.params.id;
    const {
        company_id,
        job_title,
        job_description,
        job_requirements,
        job_location,
        job_salary,
        job_type,
        job_post_date,
        job_deadline,
        job_status,
    } = req.body;
    try {
        const result = await pool.query(
            `UPDATE jobs SET 
            company_id = $1, 
            job_title = $2, 
            job_description = $3, 
            job_requirements = $4, 
            job_location = $5, 
            job_salary = $6, 
            job_type = $7, 
            job_post_date = $8, 
            job_deadline = $9, 
            job_status = $10
            WHERE job_id = $11 RETURNING *`,
            [
                company_id,
                job_title,
                job_description,
                job_requirements,
                job_location,
                job_salary,
                job_type,
                job_post_date,
                job_deadline,
                job_status,
                id,
            ]
        );
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log("Error has occured");
        res.status(500).send("An error has occured, job has not been updated");
    }});

// POST route to create a new user
app.post('/users', async (req, res) => {
    const {
        username, first_name, last_name, email, phone_number, 
        user_address, major, school, linkedin_url
    } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO users (
                username, first_name, last_name, email, phone_number, 
                user_address, major, school, linkedin_url
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            [
                username, first_name, last_name, email, phone_number, 
                user_address, major, school, linkedin_url
            ]
        );
        res.status(201).json(result.rows[0]); // Return the new user data
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send('An error occurred while adding the user.');
    }
});



//Allows companies to view candidates 
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (error) {
        console.log("Error has occured");
        res.status(500).send("An error has occured, users not found");
    }
}
);




app.listen(3000, () => console.log('Backend server is running on PORT 3000.'));
