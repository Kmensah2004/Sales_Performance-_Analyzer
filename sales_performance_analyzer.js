function calculateAverageSales(sales) {
    if (sales.length === 0) return 0;
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
function findTopAndBottomPerformers(salesData) {
    if (!salesData || salesData.length === 0) {
        return { topPerformer: null, bottomPerformer: null };
    }
    // Extract total sales into an array
    const sales = salesData.map(salesperson => salesperson.totalSales);
    
    // Find the max and min sales figures
    const maxSales = Math.max(...sales);
    const minSales = Math.min(...sales);
    const topPerformer = salesData.find(salesperson => salesperson.totalSales === maxSales);
    const bottomPerformer = salesData.find(salesperson => salesperson.totalSales === minSales);

    return { topPerformer, bottomPerformer };
}