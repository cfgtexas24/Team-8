CREATE Table Jobs (
    job_id SERIAL NOT NULL PRIMARY KEY,
    company_id INT NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    job_description VARCHAR(255) NOT NULL,
    job_requirements VARCHAR(255) NOT NULL,
    job_location VARCHAR(255) NOT NULL,
    job_salary VARCHAR(255) NOT NULL,
    job_type VARCHAR(255) NOT NULL,
    job_post_date DATE NOT NULL,
    job_deadline DATE NOT NULL,
    job_status VARCHAR(255) NOT NULL,
    FOREIGN KEY (company_id) REFERENCES Companies(company_id)
)