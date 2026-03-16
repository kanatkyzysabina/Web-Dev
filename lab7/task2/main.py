from models import Product, Food, Toy

food = Food(10, "Apple", 1.99, 52, 30)
toy = Toy(5, "Lego", 29.99, "plastic", 6)
product = Product(3, "Bag", 9.99)

products = [product, food, toy]

for p in products:
    print(p)

print("Checking children's methods: ")
print("Is children friendly: " + str(toy.is_children_friendly()))
print("Is expired: " + str(food.is_expired()))
