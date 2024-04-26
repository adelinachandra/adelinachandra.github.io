export function formatDate(dateString) {
    const currentDate = new Date();
    const [day, month, year] = dateString.split('-').map(part => parseInt(part));
    const date = new Date(year, month - 1, day);

    const options = { month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    if (date > currentDate) {
        return "present";
    }
  
    return formattedDate;
}