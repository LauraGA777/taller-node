const calculateDays = () => {
    const startDateInput = document.getElementById('start-date').value;
    const endDateInput = document.getElementById('end-date').value;

    if (!startDateInput || !endDateInput) {
        alert('Por favor, ingrese ambas fechas');
        return;
    }

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);
    if (endDate < startDate) {
        alert('La fecha final debe ser posterior a la fecha inicial.');
        return;
    }
    const timeDifference = endDate - startDate;
    const daysDifference = Math.ceil(timeDifference/(1000*60*60*24));

    document.getElementById('result').value = daysDifference
}


