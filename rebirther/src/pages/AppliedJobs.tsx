import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonText } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'; // Optional CSS file if needed

const AppliedJobs: React.FC = () => {
  const [appliedJobs, setAppliedJobs] = useState<any[]>([]);

  // Fetch applied jobs from localStorage and ensure there are no duplicates
  useEffect(() => {
    const storedAppliedJobs = localStorage.getItem('appliedJobs');
    if (storedAppliedJobs) {
      const jobsArray: { jobTitle: string; companyName: string; applicationDate: string; resumeType: string }[] = JSON.parse(storedAppliedJobs);
      // Remove duplicate jobs based on jobTitle and companyName
      const uniqueJobs = Array.from(new Set(jobsArray.map((job: any) => JSON.stringify(job)))).map((job) => JSON.parse(job));
      setAppliedJobs(uniqueJobs);
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Applied Jobs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {appliedJobs.length > 0 ? (
          <IonList>
            <div>
            {appliedJobs.slice(0, 5).map((job, index) => (  // Only display the first 5 jobs
              <IonItem key={index}>
                <IonLabel>
                  <div className='job-card'>
                    <h2>{job.jobTitle} at {job.companyName}</h2>
                    <p>Applied on: {new Date(job.applicationDate).toLocaleDateString()}</p>
                    <p>Resume Type: {job.resumeType}</p>
                  </div>

                </IonLabel>
              </IonItem>
            ))}
            </div>
          </IonList>
        ) : (
          <IonText className="no-jobs-message" color="medium">
            <p>No jobs applied to yet.</p>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AppliedJobs;
