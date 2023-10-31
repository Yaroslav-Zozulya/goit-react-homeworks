import { useState } from 'react';
import Statistics from './Statistics/Statistics ';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const btnClickHandle = e => {
    setFeedbacks(prevState => {
      const key = e.target.textContent.toLowerCase();
      return { ...prevState, [key]: prevState[key] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((100 / countTotalFeedback()) * feedbacks.good) || 0;
  };

  const { good, neutral, bad } = feedbacks;
  const isStatistic = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedbacks} onLeaveFeedback={btnClickHandle} />
      </Section>

      <Section title="Statistic">
        {isStatistic ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
