function calculateAverageSales(sales) {
    if (sales.length === 0) return 0;
    const totalSales = sales.reduce((total, sale) => total + sale, 0); //adds the total sales to the next sale is the array
    return totalSales / sales.length;
}

function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    } else if (averageSales >= 7000 && averageSales <= 10000) {
        return "Good";
    } else if (averageSales >= 4000 && averageSales < 7000) {// returns satisfactory if averagesales is more than 400 and less than 7000
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}
function findTopAndBottomPerformers(teamSales) {
    // Add together each salesperson's sales numbers
    const salesWithTotals = teamSales.map(salesperson => {
      const totalSales = salesperson.sales.reduce((sum, sale) => sum + sale, 0);
      return { name: salesperson.name, totalSales };
    });
  
    // Get the maximum and minimum total sales using Math.max and Math.min
    const maxSales = Math.max(...salesWithTotals.map(salesperson => salesperson.totalSales));
    const minSales = Math.min(...salesWithTotals.map(salesperson => salesperson.totalSales));
  
    // Find the salespeople with the maximum and minimum total sales
    const topPerformer = salesWithTotals.find(salesperson => salesperson.totalSales == maxSales);
    const bottomPerformer = salesWithTotals.find(salesperson => salesperson.totalSales == minSales);
  
    // Return the top and bottom performers
    return { topPerformer, bottomPerformer };
}

// Find and display the top and bottom performers
const result = findTopAndBottomPerformers(salesData);
console.log("Top Performer:", result.topPerformer);
console.log("Bottom Performer:", result.bottomPerformer);

function generatePerformanceReport(salesData) {
    // Calculate average sales and performance rating for each salesperson
    const report = salesData.map(salesperson => {
        const averageSales = calculateAverageSales(salesperson.sales);
        const performanceRating = determinePerformanceRating(averageSales);
        return {
            name: salesperson.name,
            averageSales: averageSales,
            performanceRating: performanceRating
        };
    });

    // Identify the top and bottom performers
    const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesData);

    // Return a summary report
    return {
        report: report,
        topPerformer: topPerformer,
        bottomPerformer: bottomPerformer
    };
}

const salesData = [
    { name: 'Alice', sales: [12000, 15600, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9880, 8580, 9200] }
];

const performanceReport = generatePerformanceReport(salesData);
console.log(performanceReport);