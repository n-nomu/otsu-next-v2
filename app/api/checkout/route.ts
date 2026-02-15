import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Stripeインスタンスを初期化（環境変数からSecret Keyを取得）
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-01-28.clover",
});

export async function POST(request: NextRequest) {
  try {
    // リクエストボディから商品情報を取得
    const body = await request.json();
    const { productId, productName, price } = body;

    // 価格をpence（最小単位）に変換：£180 → 18000
    const priceInPence = Math.round(price * 100);

    // Stripe Checkout Sessionを作成
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp", // 英国ポンド
            product_data: {
              name: productName,
              description: `Product ID: ${productId}`,
            },
            unit_amount: priceInPence, // pence単位（18000）
          },
          quantity: 1,
        },
      ],
      mode: "payment", // 一回払い
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/cancel`,
      locale: 'en', // ← 追加：決済画面を英語固定に
    });

    // Checkout URLを返す
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}