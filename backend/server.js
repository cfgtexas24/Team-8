const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.post('/tailor-resume', async (req, res) => {
    try {
      const { resume, jobDescription } = req.body;
  
      // Call to GPT API
      const gptResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `Given this resume:\n${resume}\n\nAnd this job description:\n${jobDescription}\n\nPlease tailor the resume to highlight relevant skills and experiences for this job.`,
        max_tokens: 500,
        temperature: 0.7,
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
          'Content-Type': 'application/json',
        },
      });
  
      const tailoredResume = gptResponse.data.choices[0].text.trim();
      res.json({ tailoredResume });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to tailor resume' });
    }
  });

