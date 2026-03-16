
class Product:
    def __init__(self, stock, name, price):
        self.stock = stock
        self.name = name
        self.price = price

    def is_in_stock(self):
        return self.stock > 0
    def apply_discount(self, percent):
        self.price -= self.price * (percent / 100)
        
    def __str__(self):
        return ", Name: " + self.name + ",Price: " + str(self.price) + ", Stock " + str(self.stock)

class Food(Product):
    def __init__(self, stock, name, price, calories, expiration_date):
        super().__init__(stock, name, price)
        self.calories = calories
        self.expiration_date = expiration_date
    def is_expired(self):
        return self.expiration_date <= 0
    def __str__(self):
        return super().__str__() + ", Calories: " + str(self.calories) + ", Expiration date: " + str(self.expiration_date)


class Toy(Product):
    def __init__(self, stock, name, price, material, recommended_age):
        super().__init__(stock, name, price)
        self.material = material
        self.recommended_age = recommended_age
    def is_children_friendly(self):
        return self.recommended_age < 18
    def __str__(self):
        return super().__str__() + ", Material: " + self.material + ", Reccommended age: " + str(self.recommended_age)

