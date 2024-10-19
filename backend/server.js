const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/tailor-resume', async (req, res) => {
  try {
    console.log('Received request to tailor resume');
    const { profile, jobDescription } = req.body;
    console.log('Profile:', profile);
    console.log('Job Description:', jobDescription);

    const { firstName, lastName, age, phoneNumber, skills, experiences, certifications } = profile;

    // Prepare the message for GPT
    const message = `Create a tailored professional resume for the following person, focusing on their relevance to the provided job description:
    
    Name: ${firstName} ${lastName}
    Age: ${age}
    Phone: ${phoneNumber}
    Skills: ${skills.join(', ')}
    Experiences: ${experiences.join('; ')}
    Certifications: ${certifications.join(', ')}
    
    Job Description:
    ${jobDescription}
    
    Please format the resume in a professional manner, highlighting the skills and experiences most relevant to the job description.`;

    console.log('Sending request to OpenAI API');
    // Make a request to the GPT API
    const gptResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that creates tailored resumes." },
        { role: "user", content: message }
      ],
      max_tokens: 500,
      n: 1,
      stop: null,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Received response from OpenAI API');
    const tailoredResume = gptResponse.data.choices[0].message.content.trim();
    res.json({ tailoredResume: tailoredResume });
  } catch (error) {
    console.error('Error tailoring resume:', error.response ? error.response.data : error);
    res.status(500).json({ error: 'An error occurred while tailoring the resume', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});