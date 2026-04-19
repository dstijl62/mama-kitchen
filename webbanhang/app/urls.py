from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("register/", views.register, name="register"),
    path("login/", views.loginAccount, name="login"),
    path("logout/", views.logoutAccount, name="logout"),
    path("search/", views.search, name="search"),
    path("category/", views.category, name="category"),
    path("view_detail/", views.viewdetail, name="view_detail"),
    path("cart/", views.cart, name="cart"),
    path("checkout/", views.checkout, name="checkout"),
    path("update_item/", views.updateItem, name="update_item"),
    path("delete_item/", views.deleteItem, name="delete_item"),
]
