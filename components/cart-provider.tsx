"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useToast } from "@/hooks/use-toast"

export type CartItem = {
  id: number
  name: string
  price: string
  image: string
  quantity: number
}

export type ShippingInfo = {
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
  deliveryInstructions?: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  totalItems: number
  totalPrice: number
  isCheckingOut: boolean
  checkout: (shippingInfo: ShippingInfo) => Promise<void>
  checkoutStep: "cart" | "shipping"
  setCheckoutStep: (step: "cart" | "shipping") => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "shipping">("cart")
  const { toast } = useToast()

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse saved cart", e)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("cart", JSON.stringify(items))
    } else {
      localStorage.removeItem("cart")
    }
  }, [items])

  // Calculate totals whenever items change
  useEffect(() => {
    setTotalItems(items.reduce((sum, item) => sum + item.quantity, 0))
    setTotalPrice(
      items.reduce((sum, item) => {
        const price = Number.parseFloat(item.price.replace("$", ""))
        return sum + price * item.quantity
      }, 0),
    )
  }, [items])

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex((item) => item.id === newItem.id)

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += 1
        return updatedItems
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...newItem, quantity: 1 }]
      }
    })

    // Open cart when adding items
    setIsOpen(true)
    // Reset checkout step to cart
    setCheckoutStep("cart")
  }

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem("cart")
    setCheckoutStep("cart")
  }

  const checkout = async (shippingInfo: ShippingInfo) => {
    if (items.length === 0) {
      toast({
        title: "Your cart is empty",
        description: "Please add some items to your cart before checking out.",
        variant: "destructive",
      })
      return
    }

    setIsCheckingOut(true)

    // Show processing notification
    toast({
      title: "Processing your order",
      description: "Your order is being prepared for shipping. Please wait...",
    })

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Show success notification with shipping info
    toast({
      title: "Order confirmed!",
      description: `Your order #${Math.floor(Math.random() * 10000)} has been confirmed and will be shipped to ${shippingInfo.fullName} at ${shippingInfo.address}, ${shippingInfo.city}.`,
      variant: "success",
    })

    // Clear cart and close it
    clearCart()
    setIsOpen(false)
    setIsCheckingOut(false)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen,
        totalItems,
        totalPrice,
        isCheckingOut,
        checkout,
        checkoutStep,
        setCheckoutStep,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
