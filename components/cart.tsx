"use client"

import { ShoppingCart, X, Plus, Minus, Trash2, ArrowLeft } from "lucide-react"
import { useCart, type CartItem, type ShippingInfo } from "./cart-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShippingForm } from "./shipping-form"
import Image from "next/image"

export function CartIcon() {
  const { totalItems, isOpen, setIsOpen } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <CartContent />
      </SheetContent>
    </Sheet>
  )
}

function CartContent() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    clearCart,
    checkout,
    isCheckingOut,
    checkoutStep,
    setCheckoutStep,
  } = useCart()

  const handleShippingSubmit = (data: ShippingInfo) => {
    checkout(data)
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
        <p className="text-muted-foreground mb-6">Add some delicious items to your cart!</p>
        <SheetTrigger asChild>
          <Button className="bg-amber-600 hover:bg-amber-700">Browse Menu</Button>
        </SheetTrigger>
      </div>
    )
  }

  if (checkoutStep === "shipping") {
    return (
      <div className="flex flex-col h-full">
        <SheetHeader className="mb-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setCheckoutStep("cart")} className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <SheetTitle>Shipping Information</SheetTitle>
          </div>
        </SheetHeader>

        <ShippingForm onSubmit={handleShippingSubmit} isProcessing={isCheckingOut} />
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>

      <div className="flex-1 overflow-auto py-4">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between text-lg font-medium mb-4">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-amber-600 hover:bg-amber-700" onClick={() => setCheckoutStep("shipping")}>
            Proceed to Checkout
          </Button>
          <Button variant="outline" className="w-full" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex py-4 border-b">
      <div className="h-20 w-20 relative rounded-md overflow-hidden flex-shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">{item.name}</h4>
          <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="text-amber-600 font-medium mt-1">{item.price}</div>

        <div className="flex items-center mt-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="h-7 w-7 rounded-full border flex items-center justify-center"
          >
            <Minus className="h-3 w-3" />
          </button>

          <span className="mx-3 w-6 text-center">{item.quantity}</span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="h-7 w-7 rounded-full border flex items-center justify-center"
          >
            <Plus className="h-3 w-3" />
          </button>

          <button onClick={() => removeItem(item.id)} className="ml-auto text-gray-400 hover:text-red-500">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
