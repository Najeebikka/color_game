from django.urls import path
from . import views

urlpatterns = [
    # path('click-div/', views.click_div, name='click_div'),
    path('reset-colors/', views.reset_colors, name='reset_colors'),
    path('', views.login,name='login'),
    path('home',views.home,name='home'),
    path('update-color/', views.update_color, name='update_color'),
    # path('update-content', views.update_content, name='update_content'),
]