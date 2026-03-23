from django.http import JsonResponse
from .models import Product, Category

# 1 - List of all Products
def get_products(request):
    products = Product.objects.all()
    # gets all products like SELECT * FROM Products

    data = []
    for product in products:
        data.append(
            {
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': product.category.id,
                'category_name': product.category.name,
            }
        )
    return JsonResponse(data, safe=False)

# 2 - One Product by ID
def get_product(request, id):
    try:
        product = Product.objects.get(id=id)
        # get one item by id
        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category_id': product.category.id,
            'category_name': product.category.name,
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error' : 'Product not found.'}, status=404)

# 3 - List of all Categories  
def get_categories(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name,
        })
    return JsonResponse(data, safe=False)

# 4 - One Category by ID
def get_category(request, id):
    try:
        category = Category.objects.get(id=id)
        data = {
            'id': category.id,
            'name': category.name,
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error':'Category not found.'}, status=404)

# 5 - List of Products by Category

def get_products_by_category(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category=category)
        data = []
        for product in products:
            data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': product.category.id,
                'category_name': product.category.name,
            })
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error':'Category not foung.'}, status=404)
    
    
