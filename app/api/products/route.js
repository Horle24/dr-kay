import { fetchProducts } from '../../../lib/sheets';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = await fetchProducts();
    return NextResponse.json(
      { success: true, products, count: products.length },
      {
        status: 200,
        headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
      }
    );
  } catch (err) {
    console.error('[/api/products] Error:', err.message);
    return NextResponse.json(
      { success: false, error: err.message, products: [] },
      { status: 500 }
    );
  }
}