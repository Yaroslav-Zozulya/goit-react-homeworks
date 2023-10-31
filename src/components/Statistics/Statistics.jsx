import StatItem from 'components/StatItem/StatItem';
import { Section, StatList, Title } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}

      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} label={label} percentage={percentage} />
        ))}
      </StatList>
    </Section>
  );
};

export default Statistics;
