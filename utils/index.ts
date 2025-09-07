export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'ed941fa1f7mshdd773357ace436cp173abdjsn19f3017a0ec5',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
 }
 const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
 });
 const result = await response.json();
 return result;
}

export const calculateCarRent = (cylinders: number, year: number) => {
  const basePricePerDay = 50; 
  const mileageFactor = 0.1; 
  const ageFactor = 0.05; 

  const mileageRate = cylinders * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
