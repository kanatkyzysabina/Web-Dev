from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.get_products),

    path('products/<int:id>/', views.get_product),

    path('categories/', views.get_categories),

    path('categories/<int:id>/', views.get_category),

    path('categories/<int:id>/products/', views.get_products_by_category),
]