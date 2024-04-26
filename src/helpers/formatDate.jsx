// export function formatDate(dateString) {
//     const dateParts = dateString.split('-');
//     const year = parseInt(dateParts[2]);
//     const month = parseInt(dateParts[1]) - 1;
//     const day = parseInt(dateParts[0]);
//     const date = new Date(year, month, day);
  
//     const options = { month: 'long', year: 'numeric' };
//     const formattedDate = date.toLocaleDateString('en-US', options);
  
//     if (formattedDate) return formattedDate;
//     else return (dateString)
// }

export function formatDate(dateString) {
    const currentDate = new Date();
    const [day, month, year] = dateString.split('-').map(part => parseInt(part));
    const date = new Date(year, month - 1, day); // Month is zero-based in JavaScript Date object

    // Format the date
    const options = { month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    
    // Check if the date is after the current date
    if (date > currentDate) {
        return formattedDate + " [Expected]"; // Replace with your desired message for future dates
    }
  
    return formattedDate;
}