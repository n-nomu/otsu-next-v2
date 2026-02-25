import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-01-28.clover",
});

const exchangeRate = 1.4; // £1 = $1.4

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, country, totalWeight, shippingCost, currency } = body;

    // 国またはフロントエンドから送信された通貨設定に基づいて判定
    const targetCurrency = currency === 'GBP' || country === 'GB' ? 'gbp' : 'usd';
    const isGBP = targetCurrency === 'gbp';

    // line_itemsを作成（カート内の全商品＋送料）
    const lineItems = [
      ...items.map((item: any) => {
        // 基準価格は£なので、USDの場合は為替レートで変換
        const priceInTargetCurrency = isGBP 
          ? item.price 
          : item.price * exchangeRate;
          
        return {
          price_data: {
            currency: targetCurrency,
            product_data: {
              name: item.name,
              description: `Product ID: ${item.productId}`,
            },
            unit_amount: Math.round(priceInTargetCurrency * 100),
          },
          quantity: item.quantity,
        };
      }),
      // 送料を追加（フロントエンドから送られてくるshippingCostは既に変換済み）
      {
        price_data: {
          currency: targetCurrency,
          product_data: {
            name: `International Shipping`,
            description: `${Math.round(totalWeight)}g to ${country}`,
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      },
    ];

    // Stripe Checkout Sessionを作成
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
      locale: 'en',
      metadata: {
        country: country,
        totalWeight: `${totalWeight}g`,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}