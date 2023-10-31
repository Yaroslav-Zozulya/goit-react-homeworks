import React from 'react';
import { Item } from './StatItem.styled';

const StatItem = ({ label, percentage }) => (
  <Item className="item" label={label}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </Item>
);

export default StatItem;
