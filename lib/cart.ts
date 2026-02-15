// カートアイテムの型定義
export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CART_KEY = 'otsu_cart';

// カート変更イベントを発火
function dispatchCartUpdate() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event('cartUpdated'));
}

// localStorageからカートを取得
export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

// localStorageにカートを保存
export function saveCart(cart: CartItem[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  dispatchCartUpdate(); // 変更を通知
}

// 商品をカートに追加
export function addToCart(item: Omit<CartItem, 'quantity'>, quantity: number = 1): void {
  const cart = getCart();
  const existingItem = cart.find(i => i.productId === item.productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  
  saveCart(cart);
}

// カートから商品を削除
export function removeFromCart(productId: string): void {
  const cart = getCart().filter(i => i.productId !== productId);
  saveCart(cart);
}

// 数量を更新
export function updateQuantity(productId: string, quantity: number): void {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

// カートの合計金額
export function getCartTotal(): number {
  return getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// カートの商品数（合計）
export function getCartCount(): number {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

// カートを空にする
export function clearCart(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CART_KEY);
  dispatchCartUpdate(); // 変更を通知
}