interface PriceEstimateParams {
  total_sqft: number;
  bhk: number;
  bath: number;
  location: string;
}

export async function estimatePrice(params: PriceEstimateParams): Promise<number> {
  try {
    const response = await fetch('https://property-buddy.onrender.com/predict_home_price', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error('Failed to estimate price');
    }

    const data = await response.json();
    return data.estimated_price;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
