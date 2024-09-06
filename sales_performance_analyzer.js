function calculateAverageSales(sales) {
    const totalSales = sales.reduce((total, sale) => total + sale, 0);
    return totalSales / sales.length;
}