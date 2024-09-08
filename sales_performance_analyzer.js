function calculateAverageSales(sales) {
    const totalSales = sales.reduce((total, sale) => total + sale, 0);
    return totalSales / sales.length;
}
function determinePerformanceRating(averagesales){
    if (averagesales > 1000){
        return "Excellent";
    } else if (averagesales >= 7000 && averagesales <= 10000) {
        return "Good";
    } else if (averagesales >= 4000 && averagesales < 7000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}