import moment from 'moment';

//I am not using this formatDate function to get the date
export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));
    if (!parsed.isValid()) {
        return dateString;
    }
    return parsed.format('D MMM YYYY');
}


export function getCountdownParts(endDate) {
    const duration = moment.duration(moment(new Date(endDate)).diff(new Date()));
    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds'),
    };
}