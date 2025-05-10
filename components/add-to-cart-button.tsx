"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { ShoppingCart, Check } from "lucide-react"
import { useState, useEffect } from "react"

type Item = {
  id: number
  name: string
  price: string
  image: string
}

export function AddToCartButton({ item }: { item: Item }) {
  const { addItem, items } = useCart()
  const [isInCart, setIsInCart] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  // Check if item is already in cart
  useEffect(() => {
    const itemInCart = items.some((cartItem) => cartItem.id === item.id)
    setIsInCart(itemInCart)
  }, [items, item.id])

  const handleAddToCart = () => {
    addItem(item)

    // Show visual feedback
    setIsAdding(true)
    setTimeout(() => {
      setIsAdding(false)
    }, 1500)
  }

  return (
    <Button
      variant={isInCart ? "default" : "outline"}
      className={`w-full ${isInCart ? "bg-green-600 hover:bg-green-700" : "border-amber-600 text-amber-600 hover:bg-amber-50"}`}
      onClick={handleAddToCart}
      disabled={isAdding}
    >
      {isAdding ? <Check className="mr-2 h-4 w-4" /> : <ShoppingCart className="mr-2 h-4 w-4" />}
      {isInCart ? "Added to Cart" : "Add to Cart"}
    </Button>
  )
}
