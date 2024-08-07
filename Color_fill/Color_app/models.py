# models.py
from django.db import models
from django.contrib.auth.models import User

class Container(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    div_id = models.CharField(max_length=50, unique=True)
    color = models.CharField(max_length=50, blank=True, default='')
    combined_color = models.CharField(max_length=50, blank=True, default='white')

    def __str__(self):
        return f"Container {self.div_id} for {self.user.username}"