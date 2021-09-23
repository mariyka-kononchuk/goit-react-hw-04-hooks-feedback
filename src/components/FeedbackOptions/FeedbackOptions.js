import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={s.wrapper}>
        {options.map(option=> (
        <button className={s.button} type="button" key={option} onClick={()=> onLeaveFeedback(option)}>{option}</button>
        ))}
    </div>
)
    
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
