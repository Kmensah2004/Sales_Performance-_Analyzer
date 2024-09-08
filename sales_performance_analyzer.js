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
    if (salesData.length === 0) return { topPerformer: null, bottomPerformer: null };
    }
    let topPerformer = salesData[0];
    let bottomPerformer = salesData[0];

    salesData.reduce((salesperson) => {
        if (salesperson.totalSales > topPerformer.totalSales) {
            topPerformer = salesperson;
        }
        else if (salesperson.totalSales < bottomPerformer.totalSales) {
            bottomPerformer = salesperson;
        }
    },);
    return { topPerformer, bottomPerformer };
