export const formatPrice = (inrAmount, currency = 'INR') => {
  if (!inrAmount && inrAmount !== 0) return '';
  if (currency === 'USD') {
    const usd = Math.round(inrAmount / 84);
    return `$${usd.toLocaleString('en-US')}`;
  }
  return `₹${inrAmount.toLocaleString('en-IN')}`;
};
