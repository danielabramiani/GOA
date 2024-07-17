from typing import List
from dataclasses import dataclass


@dataclass
class Product:
    name: str
    price: float
    quantity: int

    def __str__(self):
        return f"{self.name} - ${self.price} - Quantity: {self.quantity}"


class ShoppingCart:
    def __init__(self):
        self.items: List[tuple] = []

    def add_item(self, product: Product, quantity: int):
        self.items.append((product, quantity))
        print(f"{quantity} {product.name}(s) added to cart.")

    def remove_item(self, product: Product, quantity: int):
        for item in self.items:
            if item[0] == product:
                if quantity >= item[1]:
                    self.items.remove(item)
                    print(f"All {product.name}(s) removed from cart.")
                else:
                    item[1] -= quantity
                    print(f"{quantity} {product.name}(s) removed from cart.")
                return
        print(f"{product.name} not found in cart.")

    def total(self) -> float:
        return sum(product.price * quantity for product, quantity in self.items)

    def __str__(self) -> str:
        if not self.items:
            return "Your cart is empty."
        cart_items = "\n".join([f"{product.name} - Quantity: {quantity}" for product, quantity in self.items])
        return f"Items in your cart:\n{cart_items}\nTotal: ${self.total()}"


class OnlineShoppingSystem:
    def __init__(self):
        self.products: List[Product] = []

    def add_product(self, product: Product):
        self.products.append(product)

    def list_products(self):
        if not self.products:
            print("No products available.")
            return
        for product in self.products:
            print(product)

    def find_product(self, name: str) -> Product:
        for product in self.products:
            if product.name.lower() == name.lower():
                return product
        return None


def main():
    system = OnlineShoppingSystem()

    # Adding some products to the system
    system.add_product(Product("Laptop", 1000, 10))
    system.add_product(Product("Headphones", 100, 20))
    system.add_product(Product("Phone", 700, 15))

    cart = ShoppingCart()

    while True:
        print("\n==== Online Shopping ====")
        print("1. View Products")
        print("2. Add to Cart")
        print("3. Remove from Cart")
        print("4. View Cart")
        print("5. Checkout")
        print("6. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            print("\nAvailable Products:")
            system.list_products()
        elif choice == "2":
            name = input("Enter the product name: ")
            product = system.find_product(name)
            if product:
                quantity = int(input("Enter the quantity: "))
                cart.add_item(product, quantity)
            else:
                print("Product not found.")
        elif choice == "3":
            name = input("Enter the product name: ")
            product = system.find_product(name)
            if product:
                quantity = int(input("Enter the quantity: "))
                cart.remove_item(product, quantity)
            else:
                print("Product not found.")
        elif choice == "4":
            print(cart)
        elif choice == "5":
            print("\n=== Checkout ===")
            print(cart)
            print("Thank you for shopping with us!")
            break
        elif choice == "6":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
